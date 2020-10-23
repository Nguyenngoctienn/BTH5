import { Component, Injector, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/common/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { FileUpload } from 'primeng/fileupload';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector, private fb: FormBuilder,  private messageService: MessageService, private confirmationService: ConfirmationService) {
    super(injector);
  }

        formData: any;
        name: any;
        category_id: any;
        quantity: any;
        price: any;
        promotion_price: any;
        image: any;
        description: any;
        detail: any;
        status: any;
        message: any;
        submitted: any = false;


        products: any;
        product: any;

        category: any;

  public pageSize = 3;
  public page = 1;
  public uploadedFiles: any[] = [];
  public formsearch: any;
  totalRecords: any;
  config: any;

  @ViewChild(FileUpload, { static: false }) file_image: FileUpload;






 get f() { return this.formData.controls };


  ngOnInit(): void {





    this.formsearch = this.fb.group({
      'category_id': ['']
    });

        this.formData = this.fb.group({
        product_id : [''],
        name: ['', Validators.required,],
        category_id:  ['', Validators.required],
        quantity:  ['', Validators.required],
        price:  ['', Validators.required],
        promotion_price: [''],
        image_url: [''],
        description:  [''],
        detail: [''],
        status:  ['', Validators.required],
          });


        Observable.combineLatest(
          this._api.get('api/product/get-all'),

        ).takeUntil(this.unsubcribe).subscribe(
          res=> {
            this.products = res[0];
            console.log(this.products);
          setTimeout(() => {

          });
          }, err => { })

          Observable.combineLatest(this._api.get('api/category/get-category')).takeUntil(this.unsubcribe)
            .subscribe(res => {
              this.category = res[0];

          }, err => {})


      }


       delete(id: any) {


          Observable.combineLatest(
            this._api.get('api/product/delete-product/' + id)
          ).takeUntil(this.unsubcribe).subscribe(
            res => {

                this.products = this.products.filter(val => val.product_id !== id);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }

            )}


        update(id: any) {


            Observable.combineLatest(
            this._api.get('api/product/get-by-id/'+id)
          ).subscribe(
            res => {
              this.product = res[0];
              console.log(this.product);
              this.category_id = this.product.category_id;
              setTimeout(() => {
                this.formData.controls['product_id'].setValue(this.product.product_id);
                this.formData.controls['name'].setValue(this.product.name);
                this.formData.controls['quantity'].setValue(this.product.quantity);
                this.formData.controls['price'].setValue(this.product.price);
                this.formData.controls['promotion_price'].setValue(this.product.promotion_price);
                this.formData.controls['description'].setValue(this.product.description);
                this.formData.controls['detail'].setValue(this.product.detail);
                this.formData.controls['category_id'].setValue(this.product.category_id);
                this.formData.controls['status'].setValue(this.product.status);
                $(".modal-title").html("Sửa sản phẩm");
                $('#formModal').modal('toggle');
              //  this.formData.reset();


              });

            }
          )
        }




        //Show modal
   create() {
        this.formData.reset();
        $(".modal-title").html("Thêm sản phẩm");
        $('#formModal').modal('toggle');
        }


  onSubmitCreate(value: any) {
    this.submitted = true;
          if (value.product_id == null) {
            this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
              let data_image = data == '' ? null : data;
              console.log(value);
              this._api.post('api/product/create-product', {
                name: value.name,
                image_url: data_image,
                category_id: value.category_id,
                quantity: +value.quantity,
                price: +value.price,
                promotion_price: +value.promotion_price,
                description: value.description,
                detail: value.detail,
                status: +value.status,
              }).takeUntil(this.unsubcribe).subscribe((res) => {
                this.message = res;
                this.products.unshift(this.message);
                $("#formModal").modal('hide');
              });
            });
          } else {
            console.log(value);
            this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
              let data_image = data == '' ? null : data;
              this._api.post('api/product/update-product/' + value.product_id, {
                name: value.name,
                category_id: value.category_id,
                quantity: +value.quantity,
                price: +value.price,
                promotion_price: +value.promotion_price,
                image_url: data_image,
                description: value.description,
                detail: value.detail,
                status: +value.status,
              }).takeUntil(this.unsubcribe).subscribe((res) => {
                this.message = res;
                   this.products[this.findIndexById(this.message.product_id)] = this.message;
               //   location.reload();
                $("#formModal").modal('hide');
              });
            });
          }



  }

  search() {
    this.page = 1;
    this.pageSize = 5;
    this._api.post('api/product/search', { page: this.page, pageSize: this.pageSize, category_id: this.formsearch.get('category_id') })
      .takeUntil(this.unsubcribe).subscribe(
        res => {
          this.products = res.data;
          this.totalRecords = res.totalRecords;
          this.pageSize = res.pageSize;
        }
      );
  }

   findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id == id) {
                index = i;
                break;
            }
        }

        return index;
    }




 }



