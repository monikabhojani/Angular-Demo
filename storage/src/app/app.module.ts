import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { CompanyComponent } from './company/company.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    LogoutComponent,
    CompanyComponent,
    CompanydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
