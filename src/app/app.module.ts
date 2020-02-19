import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {CategoriesModule} from './categories/categories.module';
import { AppComponent } from './app.component';

// import { CategoryListComponent } from './categories/category-list/category-list.component';
// import { CategoryAddComponent } from './categories/category-add/category-add.component';

@NgModule({
  declarations: [
    AppComponent,
    // CategoryListComponent,
    // CategoryAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CategoriesModule,    
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
  }
}
