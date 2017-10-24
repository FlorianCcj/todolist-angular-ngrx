import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import {TodoModel} from '../../../models/todo.model'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailComponent {
	@Input() todo;
  @Output() removeClicked = new EventEmitter<any>();
  @Output() archiveClicked = new EventEmitter<any>();
	@Output() toggleClicked = new EventEmitter<any>();
	
  constructor() { }

  remove(todo: any) {
    this.removeClicked.emit(todo);
  }

  archive(todo: any) {
  	this.archiveClicked.emit(todo);
  }

  toggleTodo(todo: any) {
    this.toggleClicked.emit({...todo, completed: !todo.completed});
  }

}
