import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';
import { AuthProvider } from '../components/auth/AuthContext';
import { AuthNavbar } from '../components/navbar/AuthNavbar';
import { AuthMobileMenu } from '../components/navbar/AuthMobileMenu';
import { FirebaseDebug } from '../components/auth/FirebaseDebug';

// Hook to manage active navbar states
function useNavbarActiveState() {
  const location = useLocation();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    
    const updateActiveStates = () => {
      // AGGRESSIVE cleanup - remove ALL force-active classes and any manual active classes
      const allNavbarLinks = document.querySelectorAll('.navbar__link');
      allNavbarLinks.forEach(item => {
        item.classList.remove('navbar__link--force-active', 'navbar__link--active');
      });
      
      const allMenuLinks = document.querySelectorAll('.menu__link');
      allMenuLinks.forEach(item => {
        item.classList.remove('menu__link--force-active', 'menu__link--active');
      });
      
      // Determine which navbar section should be active based on current path
      let targetNavbarSelector = null;
      
      console.log('Current pathname:', location.pathname);
      
      if (location.pathname.includes('/docs')) {
        targetNavbarSelector = '.navbar__link[href*="/docs"]';
        console.log('Should activate: The Bible Bridge');
      } else if (location.pathname.includes('/blog') && !location.pathname.includes('/science-scripture') && !location.pathname.includes('/divine-comedy')) {
        // Only for main blog (Parallels), not science-scripture or divine-comedy blogs
        targetNavbarSelector = '.navbar__link[href="/wisdom-walk/blog"], .navbar__link[href*="/blog"]:not([href*="/science-scripture"]):not([href*="/divine-comedy"])';
        console.log('Should activate: Parallels');
      } else if (location.pathname.includes('/gods-heart')) {
        targetNavbarSelector = '.navbar__link[href*="/gods-heart"]';
        console.log('Should activate: Gods Heart');
      } else if (location.pathname.includes('/science-scripture')) {
        targetNavbarSelector = '.navbar__link[href*="/science-scripture"]';
        console.log('Should activate: Science & Scripture');
      } else if (location.pathname.includes('/prophecy-fulfilled')) {
        targetNavbarSelector = '.navbar__link[href*="/prophecy-fulfilled"]';
        console.log('Should activate: Prophecy Fulfilled');
      } else if (location.pathname.includes('/divine-comedy')) {
        targetNavbarSelector = '.navbar__link[href*="/divine-comedy"]';
        console.log('Should activate: Divine Comedy');
      }
      
      // Apply force-active class to the correct navbar item only
      if (targetNavbarSelector) {
        const targetNavbarLinks = document.querySelectorAll(targetNavbarSelector);
        targetNavbarLinks.forEach(item => {
          item.classList.add('navbar__link--force-active');
          console.log('Made active:', item.textContent?.trim(), 'for path:', location.pathname);
        });
      } else {
        console.log('No navbar item should be active for path:', location.pathname);
      }
      
      // For sidebar, add force-active to the current page only
      const currentPageLinks = document.querySelectorAll(`a[href="${location.pathname}"]`);
      currentPageLinks.forEach(item => {
        if (item.classList.contains('menu__link')) {
          item.classList.add('menu__link--force-active');
        }
      });
    };

    // Update immediately
    updateActiveStates();
    
    // Also update when DOM changes (for SPA navigation)
    const interval = setInterval(updateActiveStates, 500);
    
    return () => {
      clearInterval(interval);
    };
  }, [location.pathname]);
}

// Component to render auth navbar in the right place (desktop only)
function AuthNavbarPortal() {
  const [mountPoint, setMountPoint] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const tryMountAuth = () => {
        // Only target desktop navbar - mobile will use burger menu
        const possibleTargets = [
          '.navbar__items.navbar__items--right', // Desktop
          '.navbar__items--right', // Alternative
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
          authContainer.style.marginLeft = 'auto';
          
          navbarItems.appendChild(authContainer);
          setMountPoint(authContainer);

          return () => {
            if (authContainer.parentNode) {
              authContainer.parentNode.removeChild(authContainer);
            }
          };
        }
      };

      // Set up continuous monitoring for navbar changes
      const observer = new MutationObserver(() => {
        // Check if auth component exists and navbar exists
        const existingAuth = document.querySelector('.navbar__item--auth');
        const navbar = document.querySelector('.navbar__items--right');
        
        if (navbar && !existingAuth) {
          tryMountAuth();
        }
      });

      // Start observing the entire document for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Try immediately
      const cleanup = tryMountAuth();
      
      // Set up interval to ensure auth component stays mounted
      const interval = setInterval(() => {
        const existingAuth = document.querySelector('.navbar__item--auth');
        const navbar = document.querySelector('.navbar__items--right');
        
        if (navbar && !existingAuth) {
          tryMountAuth();
        }
      }, 1000);
      
      return () => {
        observer.disconnect();
        clearInterval(interval);
        if (cleanup) cleanup();
      };
    }
  }, []);

  if (!mountPoint) return null;

  return createPortal(<AuthNavbar />, mountPoint);
}

// Component to render auth in mobile menu
function AuthMobileMenuPortal() {
  const [mountPoint, setMountPoint] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const tryMountMobileAuth = () => {
        // Target the mobile navigation menu - try multiple selectors
        const mobileMenuSelectors = [
          '.navbar-sidebar__items .menu__list', // Primary mobile menu list
          '.navbar-sidebar .menu', // Mobile menu container
          '.navbar-sidebar', // Fallback to sidebar
        ];

        let mobileMenu = null;
        for (const selector of mobileMenuSelectors) {
          mobileMenu = document.querySelector(selector);
          if (mobileMenu) break;
        }

        if (mobileMenu) {
          // Remove any existing mobile auth
          const existingMobileAuth = document.querySelector('.mobile-auth-container');
          if (existingMobileAuth) {
            existingMobileAuth.remove();
          }

          // Create container for mobile auth
          const mobileAuthContainer = document.createElement('li');
          mobileAuthContainer.className = 'mobile-auth-container menu__list-item';
          
          // Append to the end of the mobile menu
          mobileMenu.appendChild(mobileAuthContainer);
          setMountPoint(mobileAuthContainer);

          return () => {
            if (mobileAuthContainer.parentNode) {
              mobileAuthContainer.parentNode.removeChild(mobileAuthContainer);
            }
          };
        }
      };

      // Set up observers to detect when mobile menu becomes available
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element && 
                (node.classList.contains('navbar-sidebar') || 
                 node.querySelector('.navbar-sidebar'))) {
              setTimeout(tryMountMobileAuth, 100);
            }
          });
        });
      });

      // Start observing
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Try immediately and with delays
      const timer1 = setTimeout(tryMountMobileAuth, 100);
      const timer2 = setTimeout(tryMountMobileAuth, 500);
      const timer3 = setTimeout(tryMountMobileAuth, 1000);
      
      return () => {
        observer.disconnect();
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, []);

  if (!mountPoint) return null;

  return createPortal(<AuthMobileMenu />, mountPoint);
}

// Wrap the entire app with AuthProvider
export default function Root({children}) {
  // Use the navbar active state hook
  useNavbarActiveState();
  
  return (
    <AuthProvider>
      {children}
      <AuthNavbarPortal />
      <AuthMobileMenuPortal />
      <FirebaseDebug />
    </AuthProvider>
  );
}