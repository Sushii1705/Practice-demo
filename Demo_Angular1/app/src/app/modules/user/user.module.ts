import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OverlayModule} from '@angular/cdk/overlay'

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { ShareModule } from 'src/app/share/share.module';
import { FormModelComponent } from './form-model/form-model.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    UserComponent,
    FormModelComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ShareModule,
    FormsModule,
    OverlayModule
  ],
  exports:[
    FormComponent,
    ListComponent,
    UserComponent,
    
  ]
})
export class UserModule { }
