import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MyformComponent } from './myform.component';

const routes: Routes = [{ path: '', component: MyformComponent,
children:[
          {path:'',redirectTo:'list',pathMatch:'full'},
          {path:'list',component:ListComponent}
        ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformRoutingModule { }
