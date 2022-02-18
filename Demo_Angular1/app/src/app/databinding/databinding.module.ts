import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindingRoutingModule } from './databinding-routing.module';
import { DatabindingComponent } from './databinding.component';
import { BindingDataComponent } from './components/binding-data/binding-data.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatabindingComponent,
    BindingDataComponent
  ],
  imports: [
    CommonModule,
    DatabindingRoutingModule,
    FormsModule
  ]
})
export class DatabindingModule { }
