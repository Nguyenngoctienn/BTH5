import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';



import {ToastModule} from 'primeng/toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

import {ProgressBarModule} from 'primeng/progressbar';

import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { MessagesModule } from 'primeng/messages';
import { ChartModule } from 'primeng/chart';
import { NgxPaginationModule } from 'ngx-pagination';
 import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [

  UnauthorizedComponent],
  imports: [
   EditorModule,
    FormsModule,
    PanelModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ChartModule,
    NgbModule


  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    TableModule,
    CommonModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ChartModule,
    NgbModule,
    NgxPaginationModule,
    EditorModule





  ]
})
export class SharedModule { }
