import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartPipe } from './depart.pipe';



@NgModule({
  declarations: [
    DepartPipe
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    DepartPipe,
  ]
})
export class ShareModule { }
