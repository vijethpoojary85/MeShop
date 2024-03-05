import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'], // Corrected property name
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private productService: ProductService) {}

  submit(data: product) {
    // console.log(data);
    this.productService.addProduct(data).subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.addProductMessage = 'Product is successfully added';
      }
      setTimeout(() => (this.addProductMessage = undefined), 5000);
    });
  }
}
