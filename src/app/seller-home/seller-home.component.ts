import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { resourceUsage } from 'process';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  productList:undefined | product[]
constructor(private product:ProductService){}

ngOnInit():void{
  this.product.productList().subscribe((result)=>{
    console.log(result)
    this.productList=result;
  })
}
}
