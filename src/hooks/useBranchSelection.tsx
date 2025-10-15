'use client';
import { loginUser } from '../auth/authService';
import { useRouter } from "next/navigation";

export const useBranchSelection = () => {
  const router = useRouter();

  const selectBranch = (branchId:any) => {
    const token = "mock_token_123"; // Temporary mock
    loginUser(token, branchId);
    console.log("Branch selected:", branchId);
    router.push('/gift-items');
  };

  return { selectBranch };
};
