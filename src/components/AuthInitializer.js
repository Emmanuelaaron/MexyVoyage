import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCurrentUser } from '../store/slices/authSlice';
import { getToken } from '../services/api';

const AuthInitializer = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Check if user has a token and fetch user data
    const token = getToken();
    if (token && !isAuthenticated && !loading) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuthenticated, loading]);

  return <>{children}</>;
};

export default AuthInitializer;
