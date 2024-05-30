import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // const getToken = localStorage.getItem('authToken');
  const getToken = true;

  if (getToken !== null) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
