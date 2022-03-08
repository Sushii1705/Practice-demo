import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  
  @Output() close: EventEmitter<Event>;
  userForm = {} as FormGroup;
  userToEdit: number;
  // userdept: Department[];
  constructor(  private fb: FormBuilder,) { 

    this.close = new EventEmitter<Event>();
  }
  ngOnInit(): void {
    
  }

}
