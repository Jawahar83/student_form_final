import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { OrderByPipe } from './order-by.pipe';
import { TableComponent } from './table/table.component';
import { StudentServiceService } from './student-service.service';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { FilterByPipe } from 'ngx-pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OrderByPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
