import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Z_FULL_FLUSH } from 'zlib';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((a) => a.UserModule),
  },

  {
    path: 'resume',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  },
  { path: 'users', 
  loadChildren: () => import('./assesment/users/users.module').then(m => m.UsersModule) },
  { path: 'databinding', loadChildren: () => import('./databinding/databinding.module').then(m => m.DatabindingModule) },
  { path: 'myform', loadChildren: () => import('./modules/myform/myform.module').then(m => m.MyformModule) },
  { path: 'ngtemp', loadChildren: () => import('./modules/ngtemplate/ngtemplate.module').then(m => m.NgtemplateModule) },
  { path: 'customer', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'subject', loadChildren: () => import('./modules/subject/subject.module').then(m => m.SubjectModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
