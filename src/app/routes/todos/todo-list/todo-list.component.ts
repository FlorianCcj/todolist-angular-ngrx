import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import {TodoModel} from '../../../models/todo.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  @Output() removeClicked = new EventEmitter<TodoModel>();
  @Output() archiveClicked = new EventEmitter<TodoModel>();
  @Output() toggleClicked = new EventEmitter<TodoModel>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo) {
  	this.removeClicked.emit(todo);
  }

  archiveTodo(todo) {
  	this.archiveClicked.emit(todo);
  }

  toggleTodo(todo: any) {
    this.toggleClicked.emit(todo);
  }

}
