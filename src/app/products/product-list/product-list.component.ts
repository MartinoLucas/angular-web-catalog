import { Component, inject, OnInit, Signal } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent{
  productService = inject(ProductService);

  jsonData: Signal<Product[] | undefined> = toSignal(this.productService.getNodeBackendData(),{initialValue:undefined});

}
