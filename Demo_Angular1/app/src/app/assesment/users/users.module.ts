import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersFormComponent } from './users-component/users-form/users-form.component';
import { UsersListComponent } from './users-component/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByNamePipe } from './pipe/search-by-name.pipe';
import { DepartPipe } from 'src/app/share/depart.pipe';
import { ShareModule } from 'src/app/share/share.module';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormComponent,
    UsersListComponent,
    SearchByNamePipe,
    
    
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule
    
    
  ],
 
 
})
export class UsersModule { }
