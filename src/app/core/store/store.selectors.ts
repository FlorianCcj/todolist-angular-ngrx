import {ActionReducerMap, createSelector} from '@ngrx/store';
import {todosReducer, TodosState} from './todos/todos.reducer';
import {visibilityFilterReducer} from './todos/visibility-filter.reducer';
import {TodosEffects} from './todos/todos.effects';
import {MessengerState, messengerReducer} from './messenger/messenger.reducer';

export interface AppState {
  todos: TodosState;
	visibilityFilter: any;
	messenger: MessengerState;
};

export const reducers: ActionReducerMap<AppState> = {
	todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  messenger: messengerReducer
};

export const effects = [
	TodosEffects
];

export const selectMessengerReducer = (state: AppState) => state.messenger;
export const selectMessengerSystemsInfos = createSelector(selectMessengerReducer, (state: MessengerState) => state.systemsInfos);