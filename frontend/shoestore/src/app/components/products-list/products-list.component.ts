import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list-grid.component.html',
  //templateUrl: './products-list-table.component.html',
  //templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  constructor(private productListService: ProductService) {}

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productListService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }
}
