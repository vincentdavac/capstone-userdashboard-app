import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token'); // check kung naka-login

  if (!token) {
    // walang token → redirect to mobile login
    return <Navigate to="/mobile/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
