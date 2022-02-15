import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-component/users-form/users-form.component';
import { UsersListComponent } from './users-component/users-list/users-list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent,
children:[
  {path:'',component:UsersListComponent},
  {path:'users-form',component:UsersFormComponent},
  {path:'users-list',component:UsersListComponent},
  {path:'edit/:id',component:UsersFormComponent}
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
