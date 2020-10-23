import { BaseComponent } from './../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],


})

export class MainComponent extends BaseComponent implements OnInit {
  list_item: any;
  capsac: any;
  tainghe: any;
  moinhat: any;
  constructor(injector: Injector) {
    super(injector);
  }


  ngOnInit(): void {
    Observable.combineLatest(this._api.get('api/product/get-all'))
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.list_item = res[0];
            this.moinhat = res[0].sort(function(a,b){
            var c = new Date(a.date).getTime();
            var d = new Date(b.date).getTime();
            return c - d;
            }).slice(0, 10);

          console.log(this.list_item);
          this.capsac = res[0].filter((s) => s.category_id == 'de10762f-5dcb-4c78-9a45-a8d776ca1e9b').slice(0, 10);
          console.log(this.capsac);
           this.tainghe = this.list_item.filter((s) => s.category_id == "7d8a6156-a2fd-41f4-9b52-8c2678a9672d").slice(0, 10);
           console.log(this.tainghe);

          // setTimeout(() => {
          //   this.loadScripts();
          // });
        },
        (err) => {}
      );
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
}
