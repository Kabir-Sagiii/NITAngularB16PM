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
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DatabindingComponent]
})
export class AppModule { }
