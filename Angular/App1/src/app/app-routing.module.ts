import { BuiltinType } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialExComponent } from './Components/angular-material-ex/angular-material-ex.component';
import { BuiltInComponent } from './Components/built-in/built-in.component';
import { LifecylehooksComponent } from './Components/lifecylehooks/lifecylehooks.component';
import { UDetailsCComponent } from './Components/udetails-c/udetails-c.component';
import { UsersProfileCComponent } from './Components/users-profile-c/users-profile-c.component';
import { CategoryComponent } from './Shopping-Cart/category/category.component';
import { ElectronicsComponent } from './Shopping-Cart/electronics/electronics.component';
import { HomeComponent } from './Shopping-Cart/home/home.component';
import { JewelaryComponent } from './Shopping-Cart/jewelary/jewelary.component';
import { PagenotfoundComponent } from './Shopping-Cart/pagenotfound/pagenotfound.component';
import { ProductListComponent } from './Shopping-Cart/product-list/product-list.component';

const routes: Routes = [
  {
  path:"",component:HomeComponent
},
{
  path:"productlist",component:ProductListComponent
},
{
  path:"category",component:CategoryComponent,children:[
    {
      path:"electronic",component:ElectronicsComponent
    },
    {
      path:"jewelary",component:JewelaryComponent
    },
    
    
  ]
},
{
 path:"lch", component:LifecylehooksComponent
},
{
  path:"am",component:AngularMaterialExComponent
},
{
  path:"pipes",component:BuiltInComponent
},
{
  path:"up",component:UsersProfileCComponent
},
{
  path:"Udetailsc/:email",component:UDetailsCComponent
},

{
      path:"**",component:PagenotfoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
