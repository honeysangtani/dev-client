import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationModalComponent, NgbdModalContent } from '../../confirmation-modal/confirmation-modal.component';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  categories: any = [];
  showMsg = false;
  message = '';

  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.categoryService.GetCategories()
      .subscribe(heroes => (this.categories = heroes));
  }

  // Delete 
  deleteCategory(data) {
    console.log(data);
    var index = index = this.categories.map(x => { return x.name }).indexOf(data.name);
    return this.categoryService.DeleteCategory(data.id).subscribe((res: any) => {
      if (res.status == 200) {
        this.categories.splice(index, 1)
        console.log('category deleted!')
        this.showMsg = true;
        this.message = "Category deleted successfully."
        $("#alert-msg").delay(500).fadeOut(); 
      } else {

      }
    })
  }

  openModal(module) {
    console.log(NgbdModalContent);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.module_name = 'category';
    modalRef.result.then((result) => {
      console.log(result);
      if (result && result == 'Yes') {
        this.deleteCategory(module);
      }
    });
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
