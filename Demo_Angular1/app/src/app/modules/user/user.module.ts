import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { ShareModule } from 'src/app/share/share.module';



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
    ShareModule,
    FormsModule
    
  ],
  exports:[
    FormComponent,
    ListComponent,
    UserComponent,
    
  ]
})
export class UserModule { }
