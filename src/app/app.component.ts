import { TodoItemService } from './shared/todo-item.service';

import {
   Component,
   OnInit 
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoItemService ]
})
export class AppComponent implements OnInit {
  
  closeDialog: boolean = false;
  todoList   : TodoItemService[];
  title: string = 'app';
  
  constructor( private todoItemService: TodoItemService[] ){}

  log(e){
    if (e == null) {
      console.log('im in')
      this.closeDialog = true;
    }
    console.log('value sented', e)
  }
  ngOnInit(){
    this.todoList = this.todoItemService;
  }


  todoDialog(){
    
  }
}
