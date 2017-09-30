import {TodosActions} from "./todos.actions";
import {Todo} from "../../../models/todo.model";

const persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');

const todosInitialState = persistedTodos.map( (todo: {_text: String, done: Boolean}) => {
    let ret = new Todo(todo._text);
    ret.done = todo.done;
    return ret;
});

export function todos(state = todosInitialState, {type, payload}) {
    switch (type){
        case TodosActions.ADD_TODO:
            return [payload, ...state];

        case TodosActions.REMOVE_TODO:
            return state.filter(t => t !== payload);

        case TodosActions.TOGGLE_TODO:
            return state.map(t => {
                if (t === payload)
                    t.done = !t.done;
                return t;
            });

        case TodosActions.TOGGLE_EDITING:
            return state.map(t => {
                if (t === payload.todo) {
                    t.editing = payload.editing;
                    t.text = payload.text && payload.text.trim() !== "" ? payload.text : t.text;
                }
                return t;
            });
        
        case TodosActions.UPDATE_TEXT:
            return state.map(t => {
                if (t === payload.todo) {
                    t.text = payload.text.trim() !== "" ?  payload.text.trim() : t.text;
                    t.editing = false;
                }
                return t;
            });


        case TodosActions.TOGGLE_ALL:
            return state.map(t => {
                t.done = payload;
                return t;
            });

        case TodosActions.ARCHIVE:
            return state.filter(t => t.done === false);

        default:
            return state;
    }
};
