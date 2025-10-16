export type CartItem = {
  id: string;         
  title: string;     
  image?: string;
  variant?: string;    
  quantity: number;    
};

export type CartState = {
  items: CartItem[];
};