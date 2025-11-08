import React from 'react';
import { AuthProvider } from '../components/auth/AuthContext';

// Wrap the entire app with AuthProvider
export default function Root({children}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}