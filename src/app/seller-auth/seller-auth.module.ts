import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SellerAuthComponent } from './seller-auth.component';

@NgModule({
  declarations: [SellerAuthComponent],
  imports: [
    CommonModule,
    FormsModule // Import FormsModule here
  ]
})
export class SellerAuthModule { }
