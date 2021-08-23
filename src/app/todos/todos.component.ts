import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todos[] = [];
  constructor(public todosServices:TodosService) { }

  ngOnInit(): void {
    this.todosServices.getTodosDetails().subscribe(result=>this.todos = result);
  }

}
