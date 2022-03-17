import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateRoutingModule } from './ngtemplate-routing.module';
import { NgtemplateComponent } from './ngtemplate.component';
import { NgtempComponent } from './ngtemp/ngtemp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgtemplateComponent,
    NgtempComponent,
    
  ],
  imports: [
    CommonModule,
    NgtemplateRoutingModule,
    FormsModule
  ]
})
export class NgtemplateModule { }
