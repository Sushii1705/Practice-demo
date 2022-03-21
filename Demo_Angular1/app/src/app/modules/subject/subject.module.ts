import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectService } from './subject.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubjectComponent,
    SubjectFormComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SubjectService]
})
export class SubjectModule { }
