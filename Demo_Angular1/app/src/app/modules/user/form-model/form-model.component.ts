import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, userdata } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit {
  @Output() close: EventEmitter<Event>;
  @Output() submit: EventEmitter<Event>;
  @Input() userToEdit:number;

  userForm = {} as FormGroup;
  // userToEdit: number;
  userdept: Department[];
  
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.close = new EventEmitter<Event>();
    this.submit = new EventEmitter<Event>();
   }

  ngOnInit(): void {
    this.getdeptlist();
    this.userForm = this.genrateForm();
    this.genrateForm();
    // this.userToEdit = this.activeRoute.snapshot.params['id'];
    // if (this.userToEdit) {
    //   this.getUserById(this.userToEdit);
    // }
  }
  getdeptlist(): void {
    this.userService.getdepartmentlist().subscribe((res) => {
      this.userdept = res;
    })
  }

  getUserById(id: number): void {
    this.userService.getUser(id).subscribe((user) => {
      this.userForm.patchValue(user);
    });
  }

  genrateForm() {
    return this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      number: ['', [Validators.required, Validators.min(10)]],
      date: [null],
      gender: [''],
      departments: ['']
    });
  }
  get getvalue() {
    return this.userForm['controls'];
  }
  saveUserData() {
    console.log(this.userToEdit);
    console.log(this.userForm.value);
    if (this.userToEdit>0) {
      this.userService
        .updateUser({ id: this.userToEdit, ...this.userForm.value })
        .subscribe((res: userdata) => {
          alert('data has been uploded');
        }); 
        this.close.emit();
    } else {
      this.userService
        .addUser(this.userForm.value)
        .subscribe((res: userdata[]) => {
          alert('data has been uploded');
          this.submit.emit(this.userForm.value);
          
        });
        this.close.emit();

    }
    this.route.navigate(['/user/user-list']);
  }
  resetForm() {
    this.userForm.reset();
    // this.route.navigate(['/user/user-form'])
  }

  onClose() {
    this.close.emit();
  }
 
}
