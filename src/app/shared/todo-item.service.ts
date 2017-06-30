import { TodoItem } from './todo-item.model';
import { Injectable } from '@angular/core';



@Injectable()
export class TodoItemService {
  constructor() { }
  
  todoList: TodoItem[] = [
    new TodoItem( 1, "Party", "At my Place at 9pm", false)
  ];
 

}
