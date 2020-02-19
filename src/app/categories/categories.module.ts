import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { CategoryAddComponent }    from './category-add/category-add.component';
import { CategoryListComponent }  from './category-list/category-list.component'
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryEditComponent } from './category-edit/category-edit.component';


@NgModule({
  declarations: [
    CategoryAddComponent,
    CategoryListComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
