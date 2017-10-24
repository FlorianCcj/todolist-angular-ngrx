import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as TodosActions from "../../../core/store/todos/todos.actions";
import * as FilterVisibilityAction from "../../../core/store/todos/visibility-filter.actions";
import { TodosEffects } from "../../../core/store/todos/todos.effects";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.scss']
})
export class TodoIndexComponent implements OnInit {

  todos : Observable<any>;
  addTodoSuccess$ : Observable<any>;

  filters = [{id: "SHOW_ALL", title: "All"}, {id: "SHOW_COMPLETED", title: "Completed"}, { id: "SHOW_ACTIVE", title: "Active" }];
  activeFilter : Observable<any>;

  constructor(
    private store : Store<any>,
    private todosEffects: TodosEffects
  ) {
  	this.store.dispatch(new TodosActions.GetTodos());
    this.todos = store.select("todos");
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( {type} ) => type === TodosActions.ADD_TODO_SUCCESS);
    this.activeFilter = store.select("visibilityFilter").take(1);
    console.warn('pouet')!
  }

  ngOnInit() {
  }

  addTodo( todo ) {
    this.store.dispatch(new TodosActions.AddTodo(todo));
  }

  removeTodo( todo ) {
    this.store.dispatch(new TodosActions.RemoveTodo(todo));
  }

  archiveTodo( todo ) {
    this.store.dispatch(new TodosActions.ArchiveTodo(todo));
  }

  toggleTodo( todo ) {
    this.store.dispatch(new TodosActions.ToggleTodo(todo));
  }

  changeFilter( filter ) {
    this.store.dispatch(new FilterVisibilityAction.SetVisibilityFilter(filter));
    this.store.dispatch(new TodosActions.GetTodos());
  }

}
