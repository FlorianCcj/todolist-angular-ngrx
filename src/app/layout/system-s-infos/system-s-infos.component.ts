import { Component, OnInit } from '@angular/core';
import {selectMessengerSystemsInfos} from '../../core/store/store.selectors'
import {SystemsInfoType, SystemsInfoModel} from '../../models/system-s-infos.model' 
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-system-s-infos',
  templateUrl: './system-s-infos.component.html',
  styleUrls: ['./system-s-infos.component.scss']
})
export class SystemSInfosComponent implements OnInit {

	systemsInformations: SystemsInfoModel[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
  	this.store.select(selectMessengerSystemsInfos).subscribe((message: SystemsInfoModel) => {
  		if (!message) {
  			this.systemsInformations = [];
  			return;
  		}

  		this.systemsInformations.push(message);
  	});
  }

  removeInfo(info: SystemsInfoModel) {
  	this.systemsInformations = this.systemsInformations.filter(x => x !== info);
  }

  iconClass (info: SystemsInfoModel) {
  	if (!info) {
  		return;
  	}

  	switch (info.type) {
  		case SystemsInfoType.Success:
  			return 'fa fa-check';
  			// return 'fa fa-thumbs-up';
  			// return 'fa fa-thumbs-o-up';
  		case SystemsInfoType.Error:
  			return 'fa fa-ban';
  			// return 'fa fa-times-circles';
  			// return 'fa fa-thumbs-down';
  			// return 'fa fa-thumbs-o-down';
  		case SystemsInfoType.Info:
  			return 'fa fa-exclamation';
  			// return 'fa fa-thumb-tack';
  			// return 'fa fa-hand-piece';
  			// return 'fa fa-hand-piece-o';
  		case SystemsInfoType.Warning:
  			// return 'fa fa-bell';
  			return 'fa fa-warning';
  	}
  }

  cssClass (info: SystemsInfoModel) {
  	if (!info) {
  		return;
  	}

  	switch (info.type) {
  		case SystemsInfoType.Success:
  			return 'alert alert-success';
  		case SystemsInfoType.Error:
  			return 'alert alert-danger';
  		case SystemsInfoType.Info:
  			return 'alert alert-info';
  		case SystemsInfoType.Warning:
  			return 'alert alert-warning';
  	}
  }

}
