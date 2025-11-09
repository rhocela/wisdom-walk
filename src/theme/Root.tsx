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
      const tryMountAuth = () => {
        // Try multiple selectors for different navbar states
        const possibleTargets = [
          '.navbar__items.navbar__items--right', // Desktop
          '.navbar__items--right', // Alternative
          '.navbar__inner', // Mobile fallback - inject directly into navbar inner
        ];

        let navbarItems = null;
        for (const selector of possibleTargets) {
          navbarItems = document.querySelector(selector);
          if (navbarItems) break;
        }

        if (navbarItems) {
          // Remove any existing auth container first
          const existingAuth = document.querySelector('.navbar__item--auth');
          if (existingAuth) {
            existingAuth.remove();
          }

          // Create a container for our auth component
          const authContainer = document.createElement('div');
          authContainer.className = 'navbar__item navbar__item--auth';
          
          // If we're injecting into navbar__inner (mobile), ensure proper positioning
          if (navbarItems.classList.contains('navbar__inner')) {
            authContainer.style.position = 'absolute';
            authContainer.style.right = '56px'; // Leave space for search icon
            authContainer.style.top = '50%';
            authContainer.style.transform = 'translateY(-50%)';
            authContainer.style.zIndex = '1000';
          } else {
            authContainer.style.marginLeft = 'auto';
          }
          
          navbarItems.appendChild(authContainer);
          setMountPoint(authContainer);

          return () => {
            if (authContainer.parentNode) {
              authContainer.parentNode.removeChild(authContainer);
            }
          };
        }
      };

      // Try immediately
      const cleanup = tryMountAuth();
      
      // If not found, try after short delays for dynamic content
      if (!mountPoint) {
        const timer1 = setTimeout(tryMountAuth, 100);
        const timer2 = setTimeout(tryMountAuth, 500);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
          if (cleanup) cleanup();
        };
      }
      
      return cleanup;
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