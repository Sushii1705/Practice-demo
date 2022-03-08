import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  close: any;
  
  constructor(private overlay: Overlay) { }
  ngOnInit(): void {
    
  }
 
  
  displayOverlay() {
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    const component = new ComponentPortal(FormsComponent);
    const componentRef = overlayRef.attach(component);
  
    componentRef.instance.close.subscribe(() => {
      overlayRef.detach();
    });
  }
  // onClose() {
  //   this.close.subscribe(() => {

  //   });
  // }
  }
  

