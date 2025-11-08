import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { AuthNavbar } from '../components/navbar/AuthNavbar';

export default function AuthNavbarClient(): React.JSX.Element | null {
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // Mount the auth navbar in any navbar element we can find
      const navbar = document.querySelector('.navbar__items.navbar__items--right');
      if (navbar) {
        const authContainer = document.createElement('div');
        authContainer.id = 'auth-navbar-container';
        navbar.appendChild(authContainer);
        
        // The AuthNavbar component will be rendered here by the theme
      }
    }
  }, []);

  return ExecutionEnvironment.canUseDOM ? <AuthNavbar /> : null;
}