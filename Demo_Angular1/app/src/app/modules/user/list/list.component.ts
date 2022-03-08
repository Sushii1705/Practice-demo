import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department, userdata } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FormModelComponent } from '../form-model/form-model.component';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  userdata: userdata[] = [];
  departmentlists:Department[]=[];
  @Output() twistChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() userSearch:string;
  
  constructor(private service: UserService, private router: Router,private overlay: Overlay) {}

  ngOnInit(): void {
    this.getData();   
    this.getdeptdata();
  }
  getData() {
    this.service.getuserlist().subscribe((res: userdata[]) => {
      this.userdata = res;
    });
  }

  editUser(id: number) {
    this.router.navigateByUrl(`/user/edit/${id}`);
    this.twistChange.emit('');
  }

  deleteuser(id:number){
    this.service.deleteuser(id).subscribe(res=>{
      alert('delete data');
      this.getData();   
    });
  }
  getdeptdata(){
    this.service.getdepartmentlist().subscribe((res) => {
      this.departmentlists=res;
    })
    
  }
  displayOverlay(id:number) {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .right(),
    });
        const component = new ComponentPortal(FormModelComponent);
    const componentRef = overlayRef.attach(component);
    if(id>0){
      componentRef.instance.getUserById(id);
      componentRef.instance.userToEdit=id;
    }
  
    componentRef.instance.close.subscribe(() => {
      overlayRef.detach();
    });
    overlayRef.backdropClick().subscribe(()=> {
      overlayRef.detach();
    })
  }

}
