'use client';
import { loginUser } from '../auth/authService';
import { useRouter } from "next/navigation";

export const useProductSelection = () => {
  const router = useRouter();

  const selectProduct = (productId:any) => {
    const token = "mock_token_123"; // Temporary mock
    loginUser(token, productId);
    console.log("Product selected:", productId);
    //router.push('/gift-items');
  };

  return { selectProduct };
};
