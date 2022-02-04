import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
// import { CoreModule } from 'src/app/core/core.module';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path :'', component: UserComponent,
  children:[
        
        {path :'', component:ListComponent},
        {path :'user-form', component:FormComponent},
        {path :'user-list', component:ListComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
