import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MyformRoutingModule } from './myform-routing.module';
import { MyformComponent } from './myform.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyformComponent,
    FormsComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    MyformRoutingModule,
    ReactiveFormsModule,
    OverlayModule
  ],

 
})
export class MyformModule { }
