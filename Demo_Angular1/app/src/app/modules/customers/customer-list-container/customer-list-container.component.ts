import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customers.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-list-container',
  templateUrl: './customer-list-container.component.html',
  styleUrls: ['./customer-list-container.component.scss']
})
export class CustomerListContainerComponent implements OnInit {
  public customerList$: Observable<Customer[]>;

  constructor(
    private customerService: CustomersService
  ) {
    this.customerList$ = new Observable();
   }



  ngOnInit(): void {
    this.customerList$ = this.customerService.getCustomers();
    console.log(this.customerList$);
  }
  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res: any) => {
      console.log(res);
    });
  }

}
