import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  items: any;
  total: any;
  public hoadonForm: FormGroup;

  ngOnInit(): void {
    this.hoadonForm = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.minLength(10)),
    });
    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for (let x of this.items) {
        x.quantity_sale = +x.quantity_sale;
        x.money = x.quantity_sale * x.price;
        this.total += x.quantity_sale * x.price;
      }
    });
  }
  onSubmit(value: any) {
    let hoadon = {
      name: value.name,
      address: value.address,
      phone: value.phone,
    //  customer_id: 0,
      total: this.total,
      listjson_chitiet: this.items,
    };
    this._api
      .post('api/bill/create-bill', hoadon)
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          alert('Tạo thành công!');
        },
        (err) => {}
      );
  }
}
