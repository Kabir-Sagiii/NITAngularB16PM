import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Components/Github-UI/home/home.component';
import { SearchComponent } from './Components/Github-UI/search/search.component';
import { ProfileComponent } from './Components/Github-UI/profile/profile.component';
import { DetailsComponent } from './Components/Github-UI/details/details.component';
import { NavComponent } from './Components/nav/nav.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { ShowhidepasswordComponent } from './Components/showhidepassword/showhidepassword.component';
import { TwowayComponent } from './Components/twoway/twoway.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DarkmodeComponent } from './Components/darkmode/darkmode.component';
import { NgifComponent } from './Components/ngif/ngif.component';
import { NgforComponent } from './Components/ngfor/ngfor.component';
import { NgforfetchComponent } from './Components/ngforfetch/ngforfetch.component';
import { NgswitchComponent } from './Components/ngswitch/ngswitch.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { NgstyleComponent } from './Components/ngstyle/ngstyle.component';
import { InputdecoratorComponent } from './Components/inputdecorator/inputdecorator.component';
import { IdparentComponent } from './Components/idparent/idparent.component';
import { IdchildComponent } from './Components/idchild/idchild.component';
import { ParentDecoratorComponent } from './Components/OutputDecorator/parent-decorator/parent-decorator.component';
import { ChildtDecoratorComponent } from './Components/OutputDecorator/childt-decorator/childt-decorator.component';
import { User1Component } from './Components/user1/user1.component';
import { User2Component } from './Components/user2/user2.component';
import { TableCComponent } from './Components/ServiceTask/table-c/table-c.component';
import { CardCComponent } from './Components/ServiceTask/card-c/card-c.component';
import { TemplateformComponent } from './Components/templateform/templateform.component';
import { ReactiveformComponent } from './Components/reactiveform/reactiveform.component';
import { FormbuilderCComponent } from './Components/formbuilder-c/formbuilder-c.component';
import { ProductListComponent } from './Shopping-Cart/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    DetailsComponent,
    NavComponent,
    DatabindingComponent,
    InterpolationComponent,
    ShowhidepasswordComponent,
    TwowayComponent,
    DarkmodeComponent,
    NgifComponent,
    NgforComponent,
    NgforfetchComponent,
    NgswitchComponent,
    NgclassComponent,
    NgstyleComponent,
    InputdecoratorComponent,
    IdparentComponent,
    IdchildComponent,
    ParentDecoratorComponent,
    ChildtDecoratorComponent,
    User1Component,
    User2Component,
    TableCComponent,
    CardCComponent,
    TemplateformComponent,
    ReactiveformComponent,
    FormbuilderCComponent,
    ProductListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
