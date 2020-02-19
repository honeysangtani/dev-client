import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  categories: any = [];

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categoryService.GetCategories()
    .subscribe(heroes => (this.categories = heroes));
  }



  // categories = [
  //   {
  //     id: "ABC8441189035",
  //     name: "Tshirt",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  //   },
  //   {
  //     id: "DEF6510463347",
  //     name: "Shoes",
  //     description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
  //   },
  //   {
  //     id: "GHI0831819467",
  //     name: "Handbags",
  //     description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
  //   }
  // ]

  

}
