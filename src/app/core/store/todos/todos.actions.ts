import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TodosActions {

    static REMOVE_TODO = '@@todos/REMOVE_TODO';
    static TOGGLE_TODO = '@@todos/TOGGLE_TODO';
    static ADD_TODO = '@@todos/ADD_TODO';
    static TOGGLE_ALL = '@@todos/TOGGLE_ALL';
    static ARCHIVE = '@@todos/ARCHIVE';
    static TOGGLE_EDITING = '@@todos/TOGGLE_EDITING';
    static UPDATE_TEXT = '@@todos/UPDATE_TEXT';

    addTodo(payload) {
        return {
            type: TodosActions.ADD_TODO,
            payload
        };
    }

    removeTodo(payload) {
        return {
            type: TodosActions.REMOVE_TODO,
            payload
        };
    }

    toggleTodo(payload) {
        return {
            type: TodosActions.TOGGLE_TODO,
            payload
        };
    }

    toggleAll(payload) {
        return {
            type: TodosActions.TOGGLE_ALL,
            payload
        };
    }

    archive() {
        return {
            type: TodosActions.ARCHIVE,
            payload: null
        };
    }

    toggleEditTodo(payload) {
        return {
            type: TodosActions.TOGGLE_EDITING,
            payload
        };
    }

    updateTodoText(payload) {
        return {
            type: TodosActions.UPDATE_TEXT,
            payload
        };
    }
};

