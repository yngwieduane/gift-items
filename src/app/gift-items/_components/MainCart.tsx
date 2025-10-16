'use client';
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
const MainCart = () => {
  const { state, increment, decrement, remove, clear, count } = useCart();
  if (state.items.length === 0) {
    return (
      <div className='min-w-[300px] p-8 h-screen bg-white flex flex-col justify-center items-center cart-shadow'>
        <img src='/Cart/no-items.png' alt="User avatar" />
      </div>
    );
  }
  return (
    <div className='min-w-[300px] p-8 h-screen bg-white cart-shadow'>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Items ({state.items.length})</h1>
        <button onClick={clear} className="text-sm text-red-600 hover:underline">Remove All</button>
      </div>
      <div className="grid gap-4">
        {state.items.map((item) => (
          <div key={`${item.id}-${item.variant ?? 'default'}`} className="flex items-center gap-4 border rounded-lg p-4">
            {item.image && (
              <Image src={item.image} alt={item.title} width={72} height={72} className="rounded-lg object-cover" />
            )}
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              {item.variant && <div className="text-sm text-gray-500">Variant: {item.variant}</div>}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item.id, item.variant)}
                className="w-8 h-8 border rounded"
                aria-label="Decrease quantity"
              >−</button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => increment(item.id, item.variant)}
                className="w-8 h-8 border rounded"
                aria-label="Increase quantity"
              >+</button>
            </div>

            <div className="w-24 text-right font-semibold">
            </div>

            <button
              onClick={() => remove(item.id, item.variant)}
              className="text-sm text-red-600 hover:underline"
              aria-label="Remove item"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainCart
