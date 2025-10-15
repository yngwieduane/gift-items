// Modified ProtectedRoute with better debugging
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { auth, isLoading } = useAuth();

  console.log('ProtectedRoute - Auth:', auth);
  console.log('ProtectedRoute - Loading:', isLoading);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (!auth.token) {
    console.log('No token, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (!auth.branch) {
    console.log('No branch, allowing access to select-branch');
    // Only redirect to select-branch if we're not already there
    if (window.location.pathname !== '/select-branch') {
      return <Navigate to="/select-branch" replace />;
    }
  }

  console.log('Auth check passed, rendering children');
  return children;
};

export default ProtectedRoute;