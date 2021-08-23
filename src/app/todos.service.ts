import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(public httpClient:HttpClient) { }

  getTodosDetails():Observable<Todos []>{
    
    return this.httpClient.get<Todos []>(this.url).pipe();

  }


}
