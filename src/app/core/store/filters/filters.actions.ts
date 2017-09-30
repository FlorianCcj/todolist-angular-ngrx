import { Injectable } from '@angular/core'; 

export const ALL = "All";
export const IN_PROGRESS = "In Progress";
export const DONE = "Done";

@Injectable()
export class FiltersActions {
	static TEXT_UPDATE = '@@filters/TEXT_UPDATE';
	static STATUS_UPDATE = '@@filters/STATUS_UPDATE';

	filterByText(payload) {
	    return {
	        type: FiltersActions.TEXT_UPDATE,
	        payload
	    };
	}

	filterByStatus(payload) {
	    return {
	        type: FiltersActions.STATUS_UPDATE,
	        payload
	    };
	}
};
