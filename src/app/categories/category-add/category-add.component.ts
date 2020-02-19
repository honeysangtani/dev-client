import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  CategoryArr: any = [];

  ngOnInit() {
    this.addCategory()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: ActivatedRoute,
    public categoryService: CategoriesService
  ){ }

  addCategory() {
    this.categoryForm = this.fb.group({
      name: [''],
    })
  }

  submitForm() {
    this.categoryService.CreateCategory(this.categoryForm.value).subscribe(res => {
      console.log('category added!')
      //this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }


}
