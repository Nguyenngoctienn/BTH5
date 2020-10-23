import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/lib/base-component';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent extends BaseComponent implements OnInit {
  total: any;

   list: any;
  page: any;
  pageSize: any;
  totalItems: any;
  category_id: any;
  categories: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.total = res ? res.length : 0;

      $('#total').data('number', this.total);
       this._api
      .get('api/category/get-category')
      .takeUntil(this.unsubscribe)
      .subscribe((res) => {
        this.categories = res;
      });

    this.list = [];
    this.page = 1;
    this.pageSize = 8;
    this._route.params.subscribe((params) => {
      this.category_id = params['id'];
      this._api
        .post('api/product/search', {
          page: this.page,
          pageSize: this.pageSize,
          category_id: this.category_id,
        })
        .takeUntil(this.unsubscribe)
        .subscribe(
          (res) => {
            this.list = res.data;
            console.log(this.list);
            this.totalItems = res.totalItems;
          },
          (err) => {}
        );
    });
    });
  }



  loadPage(page) {
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this._api
        .post('api/product/search', {
          page: page,
          pageSize: this.pageSize,
          category_id: id,
        })
        .takeUntil(this.unsubscribe)
        .subscribe(
          (res) => {
            this.list = res.data;
            console.log(this.list);
            this.totalItems = res.totalItems;
          },
          (err) => {}
        );
    });
  }
}
