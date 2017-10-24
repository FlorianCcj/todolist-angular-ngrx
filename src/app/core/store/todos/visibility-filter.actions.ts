import { Action } from '@ngrx/store';

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export class SetVisibilityFilter implements Action {
  readonly type = SET_VISIBILITY_FILTER;
  payload: string;
  constructor(public filter : string) { this.payload = filter; }
}