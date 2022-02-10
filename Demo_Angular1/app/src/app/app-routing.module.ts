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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
