import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { AuthProvider } from '../components/auth/AuthContext';
import { AuthNavbar } from '../components/navbar/AuthNavbar';
import { FirebaseDebug } from '../components/auth/FirebaseDebug';

// Component to render auth navbar in the right place
function AuthNavbarPortal() {
  const [mountPoint, setMountPoint] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // Find the navbar items container
      const navbarItems = document.querySelector('.navbar__items.navbar__items--right');
      if (navbarItems) {
        // Create a container for our auth component
        const authContainer = document.createElement('div');
        authContainer.className = 'navbar__item';
        navbarItems.appendChild(authContainer);
        setMountPoint(authContainer);

        return () => {
          if (authContainer.parentNode) {
            authContainer.parentNode.removeChild(authContainer);
          }
        };
      }
    }
  }, []);

  if (!mountPoint) return null;

  return createPortal(<AuthNavbar />, mountPoint);
}

// Wrap the entire app with AuthProvider
export default function Root({children}) {
  return (
    <AuthProvider>
      {children}
      <AuthNavbarPortal />
      <FirebaseDebug />
    </AuthProvider>
  );
}