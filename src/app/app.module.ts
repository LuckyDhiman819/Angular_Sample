import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductAppComponent } from './product-app/product-app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductNameDirective } from './product-name.directive';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDirective } from './employee.directive';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { WeatherComponent } from './weather/weather.component';
import { CityComponent } from './city/city.component';
import { LightswitchComponent } from './lightswitch/lightswitch.component';
import { DemoDirective } from './demo.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CustomersComponent,
    ProductAppComponent,
    ProductDisplayComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductNameDirective,
    EmployeeComponent,
    EmployeeDirective,
    TodosComponent,
    WeatherComponent,
    CityComponent,
    LightswitchComponent,
    DemoDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
