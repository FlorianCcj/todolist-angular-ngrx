import * as TodosActions from './todos.actions'

export interface TodosState {
  archive: any[];
  data: any[];
  pending: boolean;
  error: any;
}

const initialState = {
  archive: [],
  data: [],
  pending: false,
  error: null
}

export function todosReducer( state = initialState, action ): TodosState {
  switch( action.type ) {
    case TodosActions.GET_TODOS:
      return {...state, ...{pending: true, error: null}};
    case TodosActions.GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: action.payload, pending: false})
    case TodosActions.GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"})
    case TodosActions.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, action.payload]
      });
    case TodosActions.REMOVE_TODO:
      return Object.assign({}, state, {
        data: [...state.data.filter((todo) => action.payload.id !== todo.id)]
      });
    case TodosActions.ARCHIVE_TODO:
      return Object.assign({}, state, {
        data: [...state.data.filter((todo) => action.payload.id !== todo.id)],
        archive: [...state.archive, action.payload]
      });
    case TodosActions.TOGGLE_TODO:
      return {...state, data: [...state.data.filter((todo) => todo.id !== action.payload.id), action.payload]};
    case TodosActions.EDIT_TODO:
      return {...state, data: [
        ...state.data.filter((todo) => todo.id !== action.payload.id),
        action.payload
        ]};
    default:
      return {...state};
  }
}