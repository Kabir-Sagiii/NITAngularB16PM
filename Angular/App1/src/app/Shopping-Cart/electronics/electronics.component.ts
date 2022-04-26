import { Component, OnInit } from '@angular/core';
import {ProductListService} from "../Service/product-list.service"

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronicsDetails:any[] = []
  constructor(private productservice:ProductListService) { }

  ngOnInit(): void {
     this.getElectronicsData()
  }
  getElectronicsData() {
        this.productservice.getAllElectronicDetails().subscribe((electronicsData)=>{
               console.log(electronicsData)
               this.electronicsDetails = electronicsData
        })
      }

     
}
