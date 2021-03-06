import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';


const categoriessRoutes: Routes = [
  { path: 'categories', redirectTo: '/categories' },
  { path: 'category-add', redirectTo: '/category-add' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category-add', component: CategoryAddComponent },
  { path: 'category/:id', component: CategoryEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(categoriessRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesRoutingModule { }
