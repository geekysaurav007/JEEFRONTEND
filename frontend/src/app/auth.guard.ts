import { CanActivateFn,Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = Boolean(localStorage.getItem('isAdmin')) // Simulate a logged-in check
  if (isLoggedIn) {
    return true;
  } else {
    return false;
  }
};
