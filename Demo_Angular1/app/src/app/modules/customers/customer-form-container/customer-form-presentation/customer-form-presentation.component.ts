import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer, CustomerForm } from '../../customers.model';
import { CustomerFormPresenterService } from '../customer-form-presenter/customer-form-presenter.service';

@Component({
  selector: 'app-customer-form-presentation',
  templateUrl: './customer-form-presentation.component.html',
  styleUrls: ['./customer-form-presentation.component.scss'],
  viewProviders: [CustomerFormPresenterService],
})
export class CustomerFormPresentationComponent implements OnInit {
  @Input() public set customerData(value: Customer | null) {
    // console.log(value);
    if (value) {
      console.log(value);
      this.formTitle = 'Edit Customer';
      // this.customerForm.controls['age'].disable();
      console.log(this.customerForm);

      this.customerForm.patchValue(value);
      this._customerData = value;
    }
  }
  public get customerData(): Customer | null {
    return this._customerData;
  }

  private _customerData!: Customer;

  @Output() public add: EventEmitter<CustomerForm>;
  @Output() public edit: EventEmitter<CustomerForm>;
  @Output() public delete: EventEmitter<number>;

  public customerForm: FormGroup;

  public formTitle: string;

  constructor(
    private customerFormPresenter: CustomerFormPresenterService,
    private location: Location
  ) {
    this.customerForm = this.customerFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Customer';
  }

  ngOnInit(): void {
    this.customerFormPresenter.customerFormData$.subscribe(
      (res: CustomerForm) => {
        // if (this.formTitle === 'Add Customer') {
        //   this.add.emit(res);
        // } else {
        //   this.edit.emit(res);
        // }
        this.formTitle === 'Add Customer'
          ? this.add.emit(res)
          : this.edit.emit(res);
      }
    );
  }

  onSubmit() {
    this.customerFormPresenter.onSubmit(this.customerForm);
  }
  onCancel() {
    this.location.back();
  }
}
