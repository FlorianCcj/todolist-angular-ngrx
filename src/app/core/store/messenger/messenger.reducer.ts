import * as MessengerActions from './messenger.actions'

export interface MessengerState {
  systemsInfos: any; // todo mettre un type
}

const messengerInitialState = {
  systemsInfos: null
}

export function messengerReducer( state = messengerInitialState, action ): MessengerState {
  switch( action.type ) {
    case MessengerActions.ADD_SYSTEM_S_INFOS:
      return {...state, systemsInfos: action.payload};
    default:
      return {...state};
  }
}