import { CanActivateFn } from '@angular/router';

export const userauthGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('iSLogin') // Simulate a logged-in check
  if (isLoggedIn=="yes") {
    return true;
  } else {
    return false;
  }
};
