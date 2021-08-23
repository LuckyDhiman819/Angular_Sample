import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminGuard } from './admin.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeeComponent } from './employee/employee.component';
import { FirstComponent } from './first/first.component';
import { ProductAppComponent } from './product-app/product-app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { SecondComponent } from './second/second.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path : "goToFirst", component : FirstComponent},
  {path : "goToSecond", component : SecondComponent},
  {path : "cust", component : CustomersComponent},
  {path : "productForm", component : ProductAppComponent},
  {path : "ProductDislay", component : ProductDisplayComponent},
  {path : "contactUs", component : ContactUsComponent},
  {path : "aboutUs", component : AboutUsComponent},
  {path : "employeeDetails", component : EmployeeComponent, canActivate: [AdminGuard]},
  {path : "TodosDetails", component : TodosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
