import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from './services/seller.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sellerService = inject(SellerService);
  if(sellerService.isSellerLoggedIn){
    return true;
  }
  return router.createUrlTree(['./login'])
};
