import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'', redirectTo:'user', pathMatch:"full"
  },
  {
    path:'user',
    loadChildren:() => import('./modules/user/user.module').then((a) => a.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }