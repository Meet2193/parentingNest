import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platform_id = inject(PLATFORM_ID);
  // Check if the code is running in the browser
  // if (!isPlatformBrowser(platform_id)) {
  //   return false;
  // }

  // const getToken = localStorage.getItem('authToken');

  // if (getToken !== null) {
  //   return true;
  // } else {
  //   router.navigateByUrl('/');
  //   return false;
  // }
  return true;
};
