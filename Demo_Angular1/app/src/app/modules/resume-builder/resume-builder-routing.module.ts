import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeBuilderComponent } from './resume-builder.component';

const routes: Routes = [
  { path: '', component: ResumeBuilderComponent,
  children:[
        {path:'',component:ResumeFormComponent},
        {path:'resume-form',component:ResumeFormComponent},
        {path:'resume-view',component:ResumeViewComponent}

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
