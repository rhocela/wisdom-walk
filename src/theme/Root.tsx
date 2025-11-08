import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { AuthProvider } from '../components/auth/AuthContext';
import { AuthNavbar } from '../components/navbar/AuthNavbar';
import { FirebaseDebug } from '../components/auth/FirebaseDebug';

// Component to render auth navbar in the right place
function AuthNavbarPortal() {
  const [desktopMountPoint, setDesktopMountPoint] = React.useState<HTMLElement | null>(null);
  const [mobileMountPoint, setMobileMountPoint] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const setupNavbarInjection = () => {
        // Desktop navbar injection
        const desktopNavbarItems = document.querySelector('.navbar__items.navbar__items--right');
        if (desktopNavbarItems && !desktopMountPoint) {
          const authContainer = document.createElement('div');
          authContainer.className = 'navbar__item navbar__item--desktop';
          desktopNavbarItems.appendChild(authContainer);
          setDesktopMountPoint(authContainer);
        }

        // Mobile navbar injection - inside the hamburger menu
        const mobileNavbarMenu = document.querySelector('.navbar-sidebar__items');
        if (mobileNavbarMenu && !mobileMountPoint) {
          const authContainer = document.createElement('div');
          authContainer.className = 'navbar__item navbar__item--mobile';
          authContainer.style.padding = '1rem';
          authContainer.style.borderTop = '1px solid var(--ifm-toc-border-color)';
          authContainer.style.marginTop = '1rem';
          mobileNavbarMenu.appendChild(authContainer);
          setMobileMountPoint(authContainer);
        }
      };

      // Try immediately
      setupNavbarInjection();

      // Also try after a delay for mobile menu
      const timer = setTimeout(setupNavbarInjection, 500);

      // Try on navigation changes
      const observer = new MutationObserver(setupNavbarInjection);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        clearTimeout(timer);
        observer.disconnect();
        if (desktopMountPoint?.parentNode) {
          desktopMountPoint.parentNode.removeChild(desktopMountPoint);
        }
        if (mobileMountPoint?.parentNode) {
          mobileMountPoint.parentNode.removeChild(mobileMountPoint);
        }
      };
    }
  }, [desktopMountPoint, mobileMountPoint]);

  return (
    <>
      {desktopMountPoint && createPortal(<AuthNavbar />, desktopMountPoint)}
      {mobileMountPoint && createPortal(<AuthNavbar />, mobileMountPoint)}
    </>
  );
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