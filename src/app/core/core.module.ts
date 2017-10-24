import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TodosService} from './services/todos.service';
import {SystemsInfosService} from './services/system-s-infos.service';
import {effects, reducers} from './store/store.selectors' 

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers : [
    TodosService,
    SystemsInfosService
	],
  declarations: []
})
export class CoreModule { }
