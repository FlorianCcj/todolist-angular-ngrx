import {Component} from "@angular/core";
import {AppState} from "../../interfaces/appState";
import {Store} from "@ngrx/store";
import * as Rx from "rxjs/Rx";
// import {removeTodo, toggleTodo, toggleEditTodo, updateTodoText} from "../../core/store/todos/todos.actions";
import {TodosActions} from "../../core/store/todos/todos.actions";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    todos;
    filters;

    removeClick$ = new Rx.Subject()
        .map((payload) =>  this.todosActions.removeTodo(payload));

    toggleTodo$ =  new Rx.Subject()
        .map((payload) =>  this.todosActions.toggleTodo(payload));
    
    toggleEditTodo$ = new Rx.Subject()
        .map((payload) => this.todosActions.toggleEditTodo(payload));
    
    updateTodoText$ = new Rx.Subject()
        .map((payload) => this.todosActions.updateTodoText(payload));

    constructor(
      store: Store<AppState>,
      private todosActions: TodosActions
    ){
        this.todos = store.select('todos');
        this.filters = store.select('filters');

        Rx.Observable.merge(
            this.removeClick$,
            this.toggleTodo$,
            this.toggleEditTodo$,
            this.updateTodoText$
        )
            .subscribe(store.dispatch.bind(store));
    }
}
