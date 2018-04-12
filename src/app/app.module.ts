import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './services/contact.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    Ng2PageScrollModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
