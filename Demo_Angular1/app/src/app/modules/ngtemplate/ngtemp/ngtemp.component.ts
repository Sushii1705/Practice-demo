import {  OnInit } from '@angular/core';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngtemp',
  templateUrl: './ngtemp.component.html',
  styleUrls: ['./ngtemp.component.scss']
})
export class NgtempComponent implements OnInit {
  title = 'ngTemplateOutlet Example';
 
  @ViewChild('cardTemplate',{static:true}) cardTemplate:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate',{static:true}) listTemplate:TemplateRef<HTMLElement>;
 
  mode ="card"
 
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
 
  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
 
  get template() {
 
    if(this.mode=="list") return this.listTemplate
    return this.cardTemplate
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
