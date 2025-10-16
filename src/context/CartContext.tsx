'use client';

import { CartItem, CartState } from '@/types/cart';
import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

type Action =
  | { type: 'ADD'; payload: CartItem }
  | { type: 'INCREMENT'; id: string; variant?: string }
  | { type: 'DECREMENT'; id: string; variant?: string }
  | { type: 'REMOVE'; id: string; variant?: string }
  | { type: 'CLEAR' };

type CartContextValue = {
  state: CartState;
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  increment: (id: string, variant?: string) => void;
  decrement: (id: string, variant?: string) => void;
  remove: (id: string, variant?: string) => void;
  clear: () => void;
  count: number;
};

const STORAGE_KEY = 'cart:v1';

function loadInitialState(): CartState {
  if (typeof window === 'undefined') return { items: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartState) : { items: [] };
  } catch {
    return { items: [] };
  }
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD': {
      const { id } = action.payload;
      const idx = state.items.findIndex(
        i => i.id === id 
      );
      if (idx > -1) {
        const copy = [...state.items];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + action.payload.quantity };
        return { items: copy };
      }
      return { items: [...state.items, action.payload] };
    }
    case 'INCREMENT': {
      return {
        items: state.items.map(i =>
          i.id === action.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    case 'DECREMENT': {
      return {
        items: state.items
          .map(i =>
            i.id === action.id 
              ? { ...i, quantity: Math.max(1, i.quantity - 1) }
              : i
          ),
      };
    }
    case 'REMOVE': {
      return {
        items: state.items.filter(i => !(i.id === action.id )),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitialState);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const count = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const addToCart: CartContextValue['addToCart'] = (item) => {
    const payload: CartItem = { quantity: 1, ...item };
    dispatch({ type: 'ADD', payload });
  };

  const value: CartContextValue = {
    state,
    addToCart,
    increment: (id, variant) => dispatch({ type: 'INCREMENT', id, variant }),
    decrement: (id, variant) => dispatch({ type: 'DECREMENT', id, variant }),
    remove: (id, variant) => dispatch({ type: 'REMOVE', id, variant }),
    clear: () => dispatch({ type: 'CLEAR' }),
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}