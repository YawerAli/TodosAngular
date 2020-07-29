import { Component, OnInit } from '@angular/core';
import  { Todo} from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos : Todo[];
  todoTitle : string;
  idForTodo : number;
  constructor() { }

  ngOnInit():void {
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
      'id' : 1,
       'title': 'First Todo',
       'completed' : false,
       'editing' : false,
      },
      {
        'id' : 2,
        'title' :  'Second Todo',
        'completed' : false,
        'editing': false,
      },
      {
        'id' : 3,
        'title' :  'Third Todo',
        'completed' : false,
        'editing': false,
      },
    ];
}
/** function for adding a todo  */
addTodo()
{
  if(this.todoTitle.trim().length === 0 )
  {
    return;
  }
  this.todos.push({
    id : this.idForTodo,
    title : this.todoTitle,
    completed : false,
    editing : false,
})
/**todo's title get back to its original state */
this.todoTitle = '';
/**incrementing todo's id everytime addTodo function is called. */
this.idForTodo++;

}
/**deleting todo with reference to its id */
deleteTodo(id: number): void {
  this.todos = this.todos.filter(todo => todo.id !== id); 
}
/** double click to edit a todo. */
editTodo(todo : Todo):void  {
  todo.editing = true;
}

doneEdit(todo:Todo):void 
{
  todo.editing = false;
}





}
