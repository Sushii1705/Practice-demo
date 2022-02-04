import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class UserModule { }
