import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';

//import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  CategoryArr: any = [];
  showMsg = false;
  message = '';
  show_submit: any; 
  submitted = false;

  ngOnInit() {
    this.addCategory();
    this.show_submit = true;
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
    });
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

  get f() { return this.categoryForm.controls; }


  submitForm() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      this.showMsg = false;
      this.message = '';  
      return;
    } 
    this.categoryService.CreateCategory(this.categoryForm.value,).subscribe((res:any) => {
      if(res.status == 200){
        this.showMsg = true;
        this.submitted = false; 
        this.showMsg = true;
        this.message = res.message; 
        this.categoryForm.reset();
        $("#alert-msg").delay(500).fadeOut();       
      } else {
        
      }

      //this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }
}
