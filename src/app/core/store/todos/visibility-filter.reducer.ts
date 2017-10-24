import * as VisibilityFilterActions from './visibility-filter.actions'

export const initialState: string = "SHOW_ALL"

export function visibilityFilterReducer( state = initialState, action ): string {
  switch( action.type ) {
    case VisibilityFilterActions.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}