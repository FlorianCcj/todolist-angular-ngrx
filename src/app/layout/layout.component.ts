import { Component, OnInit } from '@angular/core';
import {SystemsInfosService} from '../core/services/system-s-infos.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private systemsInfosService: SystemsInfosService) { 
  	systemsInfosService.info('Salut, j\'ai creer ce projet pour le fun, creer un layout, et faire un systeme de messagerie peinard tranquil');
  }

  ngOnInit() {
  }

}
