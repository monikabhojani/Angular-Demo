import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpsService } from './cps.service';
import { ExpenseModule } from './expense/expense.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExpenseModule
  ],
  providers: [CpsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('app module loaded');
  }
 }
