import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:3000/employees";


  constructor(public httpClient: HttpClient) { }

  getEmployeeDetails() {

    return [
      { id: 1, first_name: "Lucky", last_name: "Dhiman", email: "luckydhiman7988@gmail.com" },
      { id: 2, first_name: "Dhiman", last_name: "Lucky", email: "lucky7988@gmail.com" },
      { id: 3, first_name: "jai hind", last_name: "jai bharat", email: "jai_hind_jai_bharat@gmail.com" }
    ]


  }
  getNewEmployeeDetails(): Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(this.url).pipe();

  }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  GetEmployees(): Observable<Employee []> {
    return this.httpClient.get<Employee[]>(this.url)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  // employee = new Employee();
  // POST
  CreateEmployee(employee:Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.url , employee, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  

  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
