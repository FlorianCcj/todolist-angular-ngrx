import {Injectable} from '@angular/core';
import {SystemsInfoModel, SystemsInfoType} from '../../models/system-s-infos.model';
import { Store } from "@ngrx/store";
import {AddSystemsInfo} from '../store/messenger/messenger.actions'

@Injectable()
export class SystemsInfosService {
	constructor(private store: Store<any>) {}

	success(message: string) {
		this.systemsInfos(SystemsInfoType.Success, message);
	}

	error(message: string) {
		this.systemsInfos(SystemsInfoType.Error, message);
	}

	info(message: string) {
		this.systemsInfos(SystemsInfoType.Info, message);
	}

	warn(message: string) {
		this.systemsInfos(SystemsInfoType.Warning, message);
	}

	systemsInfos(type: SystemsInfoType, message: string) {
		this.store.dispatch(new AddSystemsInfo(<SystemsInfoModel>{type, message}));
	}

	clear() {
		this.store.dispatch(new AddSystemsInfo(null));
	}
}