import {Component} from "@angular/core";
import {AppState} from "../../interfaces/appState";
import {Store} from "@ngrx/store";

import * as Rx from "rxjs/Rx";
// import {archive} from "../../core/store/todos/todos.actions";
import {TodosActions} from "../../core/store/todos/todos.actions";
// import {filterByText} from "../../core/store/filters/filters.actions";
import {FiltersActions} from "../../core/store/filters/filters.actions";

@Component({
selector: 'app-menu',
templateUrl: './menu.component.html',
styleUrls: ['./menu.component.css']
})
export class MenuComponent {

	todos;

	getTodosLength = (v) => v ? v.length : 0;
	getRemainingTasksLength = (v) => v ? v.filter(t => !t.done).length : 0;

	archive$ = new Rx.Subject()
		.map(() => this.todosActions.archive());

	updateFilterText$ = new Rx.Subject()
		.map((text) => this.filtersActions.filterByText(text));

	constructor(
	  private filtersActions: FiltersActions,
	  private todosActions: TodosActions,
	  store: Store<AppState>
    ) {
		this.todos = store.select('todos');

		Rx.Observable.merge(
			this.archive$,
			this.updateFilterText$
		)
		.subscribe(store.dispatch.bind(store));
	}
}
