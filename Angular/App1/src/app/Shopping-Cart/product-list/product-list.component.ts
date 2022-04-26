import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../Service/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allProductDetails:any[] =[]
  constructor(private productlist:ProductListService) { }

  ngOnInit(): void {
        this.productlist.getAllProductData().then((res)=>{
          return res.json()
        }).then((allproductData)=>{
           console.log(allproductData)
            this.allProductDetails = allproductData
        })
  }

}
