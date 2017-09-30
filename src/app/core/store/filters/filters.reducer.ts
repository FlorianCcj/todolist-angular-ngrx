import {Filters} from "../../../interfaces/filters";
import {FiltersActions, ALL} from "./filters.actions";

const initialState: Filters = {
    text: '',
    status: ALL
};

export function filters(state = initialState,  {type, payload}) {
    switch (type){
        case FiltersActions.TEXT_UPDATE:
            return Object.assign({}, state, {text: payload});
        case FiltersActions.STATUS_UPDATE:
            return Object.assign({}, state, {status: payload});
        default:
            return state;
    }
};
