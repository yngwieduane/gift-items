// useLoginForm.js - Improved version
import { useState } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app, you'd make an API call here
      const result = login("dummy_token", null);
      
      if (result.success) {
        // Navigate to select branch since no branch was provided
        router.push('/select-branch');
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError("An unexpected error occurred", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    isLoading,
    error,
    setError
  };
};