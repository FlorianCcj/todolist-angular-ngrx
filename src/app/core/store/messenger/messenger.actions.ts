import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const ADD_SYSTEM_S_INFOS = '[Messenger] Add System\'s infos';

export class AddSystemsInfo implements Action {
  readonly type = ADD_SYSTEM_S_INFOS;
  constructor(public payload: any) {}
}