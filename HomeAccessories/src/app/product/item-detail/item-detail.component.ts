import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent extends BaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  product: any;
  productRelative: any;
  category_id: any;
  ngOnInit(): void {
    ((this.product = {}), this.productRelative= []),
      this._route.params.subscribe((params) => {
        let id = params['id'];
        this._api
          .get('api/product/get-by-id/' + id)
          .takeUntil(this.unsubscribe)
          .subscribe((res) => {
            this.product = res;
            console.log(this.product);
            this.category_id = res.category_id;
              this._api
          .get('api/product/get-product-related/' + id + '/' + this.category_id)
          .takeUntil(this.unsubscribe)
          .subscribe((data) => {

            this.productRelative = data;
            console.log(this.productRelative);
            setTimeout(() => {
              this.loadScripts();
            });
        });
            // setTimeout(() => {
            //   this.loadScripts();
            // });
          });
         console.log(id, this.category_id);

      });

  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
