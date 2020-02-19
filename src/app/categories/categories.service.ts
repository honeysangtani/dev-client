import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Category {
  id: Number,
  name: String,
}

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  baseurl = 'http://127.0.0.1:8000/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  GetCategories(): Observable<Category> {
    return this.http.get<Category>(this.baseurl + '/categories/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // POST
  CreateCategory(data): Observable<Category> {
    console.log(data);
    return this.http.post<Category>(this.baseurl + '/category-add/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  } 

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) { }
}
