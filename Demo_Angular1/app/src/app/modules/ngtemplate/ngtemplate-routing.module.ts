import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtempComponent } from './ngtemp/ngtemp.component';
import { NgtemplateComponent } from './ngtemplate.component';

const routes: Routes = [{ path: '', component: NgtempComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgtemplateRoutingModule { }
