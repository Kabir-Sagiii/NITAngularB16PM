import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Shopping-Cart/home/home.component';
import { ProductListComponent } from './Shopping-Cart/product-list/product-list.component';

const routes: Routes = [{
  path:"",component:HomeComponent
},{
  path:"productlist",component:ProductListComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
