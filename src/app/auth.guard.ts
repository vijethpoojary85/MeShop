import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';



export const AuthGuard: CanActivateFn = (route, state) => {
const data = inject(SellerService);
if(localStorage.getItem('seller')){
  return true
}
return data.isSellerLoggedIn;
}

