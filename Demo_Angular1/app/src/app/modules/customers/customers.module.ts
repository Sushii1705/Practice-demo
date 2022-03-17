import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerFormContainerComponent } from './customer-form-container/customer-form-container.component';
import { CustomerListContainerComponent } from './customer-list-container/customer-list-container.component';
import { CustomerFormPresentationComponent } from './customer-form-container/customer-form-presentation/customer-form-presentation.component';
import { CustomerListPresentationComponent } from './customer-list-container/customer-list-presentation/customer-list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListContainerComponent,
    CustomerListPresentationComponent,
    CustomerFormContainerComponent,
    CustomerFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
