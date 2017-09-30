import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todos } from './todos/todos.reducer';
import { TodosActions } from './todos/todos.actions';
import { filters } from './filters/filters.reducer';
import { FiltersActions } from './filters/filters.actions';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

export let EchoesReducers = {
	todos,
	filters
};

export let EchoesActions = [
	TodosActions,
	FiltersActions
];

@NgModule({
  imports: [
    StoreModule.forRoot(EchoesReducers),
  ],
  declarations: [],
  providers: [...EchoesActions]
})
export class CoreStoreModule { }
