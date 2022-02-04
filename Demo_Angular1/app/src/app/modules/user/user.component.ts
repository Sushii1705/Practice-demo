import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  buttonchange: string='Add User'
  twist: boolean= false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  changebutton(){
    // this.twist=!this.twist
    debugger
    if(this.twist){
      this.twist=false
      this.buttonchange = 'Add user'
      this.router.navigate(['/user/user-list'])
    }
    else{
      this.twist=true
      this.buttonchange = 'back to list'
      this.router.navigate(['/user/user-form'])
    }
  }

}
