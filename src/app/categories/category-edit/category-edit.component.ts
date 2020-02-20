import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  CategoryList: any = [];
  categoryUpdateForm: FormGroup;
  categoryData: any;
  CategoryArr: any = [];
  showMsg = false;
  message = '';
  submitted = false;

  ngOnInit() {
    this.categoryUpdateForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: ActivatedRoute,
    public categoryService: CategoriesService,
    public r:Router
  ) {
    var id = this.router.snapshot.paramMap.get('id');
   
    this.categoryService.GetCategory(id).subscribe((res:any) => {
      this.categoryData = res.category;

      this.categoryUpdateForm = this.fb.group({
        name: [this.categoryData.name, Validators.required],        
      })

      //this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }

  get f() { return this.categoryUpdateForm.controls; }

  updateForm() {
    this.submitted = true;
    if (this.categoryUpdateForm.invalid) {
      this.showMsg = false;
      this.message = '';  
      return;
    } 
    var id = this.router.snapshot.paramMap.get('id');

    this.categoryService.updateCategory(id, this.categoryUpdateForm.value).subscribe((res:any) => {
      if(res.status == 200){
        this.showMsg = true;
        this.submitted = false; 
        this.showMsg = true;
        this.message = res.message; 
        // this.categoryForm.reset();
        $("#alert-msg").delay(500).fadeOut();
        this.ngZone.run(() => this.r.navigateByUrl('/categories'));       
      } else {

      }

    });
  }   
}
