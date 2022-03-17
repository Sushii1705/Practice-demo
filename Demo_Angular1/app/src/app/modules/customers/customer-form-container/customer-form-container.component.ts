import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer, CustomerForm } from '../customers.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-form-container',
  templateUrl: './customer-form-container.component.html',
  styleUrls: ['./customer-form-container.component.scss']
})
export class CustomerFormContainerComponent implements OnInit {
  
  public id!: string;
  public customerData$: Observable<Customer>

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.customerData$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)

    if (this.id) {
      this.customerData$ = this.customerService.getCustomerById(this.id);
    }
  }

  ngOnInit(): void {
  }
  addUser(customerForm: CustomerForm) {
    this.customerService.addCustomer(customerForm).subscribe(
      (res: any) => {
        alert('Post success')
        this.router.navigateByUrl('customer/list');
      }
    );
  }

  editUser(customerForm: CustomerForm) {
    this.customerService.editCustomer(customerForm,this.id).subscribe(
      (res: any) => {
        alert('Edit success')
        this.router.navigateByUrl('customer/list');
      }
    );
  }
}
