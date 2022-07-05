import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];
  constructor() {
    this.todos = [{
        sno: 1,
        title: "This is Title One",
        description: "Description",
        active: true
      },{
        sno: 2,
        title: "This is Title Two",
        description: "Description",
        active: true
      },{
        sno: 3,
        title: "This is Title Three",
        description: "Description",
        active: false
      },{
        sno: 4,
        title: "This is Title Four",
        description: "Description",
        active: true
      },
    ]
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    alert(todo)
  }
}
