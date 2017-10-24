import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const REMOVE_TODO = "REMOVE_TODO";
export const ARCHIVE_TODO = "ARCHIVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export class GetTodos implements Action {
  readonly type = GET_TODOS;
}
export class GetTodosSuccess implements Action {
  readonly type = GET_TODOS_SUCCESS;
  constructor(public payload: any) {}
}
export class GetTodosError implements Action {
  readonly type = GET_TODOS_ERROR;
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  payload: any;
  constructor(title: string) { this.payload = {title}}
}
export class AddTodoSuccess implements Action {
  readonly type = ADD_TODO_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTodoError implements Action {
  readonly type = ADD_TODO_ERROR;
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: any) {}
}

export class ArchiveTodo implements Action {
  readonly type = ARCHIVE_TODO;
  constructor(public payload: any) {}
}

export class ToggleTodo implements Action {
  readonly type = TOGGLE_TODO;
  constructor(public payload: any) {}
}

export class EditTodo implements Action {
  readonly type = EDIT_TODO;
}


export type Actions =
  | GetTodos
  | GetTodosSuccess
  | GetTodosError
  | AddTodo
  | AddTodoSuccess
  | AddTodoError
;