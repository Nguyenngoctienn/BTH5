import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/common/base-component';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  result: number[] = [];
  data: any;
  solieu: any;
  constructor(private injector: Injector) {
    super(injector)
  }


  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/bill/doanh-thu-theo-thang'),

    ).takeUntil(this.unsubcribe).subscribe(
      res => {
        this.solieu = res[0];
        console.log(this.solieu.thang1);
        let json_data = (this.solieu);


        for (var i in json_data) {
          let x = +json_data[i]
          this.result.push(x);
        }
        console.log(this.result);

        //    let obj = JSON.parse(this.solieu);
        //   console.log(obj);
        setTimeout(() => {

        });
      }, err => { })

   this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'First Dataset',
                    data:this.result,
                    fill: false,
                    borderColor: '#4bc0c0'
                },

            ]
        }
    }

  }









