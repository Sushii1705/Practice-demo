import { Component, OnInit } from '@angular/core';
import { user } from '../model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  userlist = user;
  constructor() { }

  ngOnInit(): void {
  }

}
