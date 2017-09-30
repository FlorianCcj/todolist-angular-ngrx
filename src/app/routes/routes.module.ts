import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './menu/menu.component';
import { StatusSelectorComponent } from './status-selector/status-selector.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const ROUTE_COMPONENTS = [
	AppComponent, 
  	MenuComponent, 
  	StatusSelectorComponent, 
  	TodoListComponent
]

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
  	...ROUTE_COMPONENTS
  ],
  exports: [
  	...ROUTE_COMPONENTS
  ]
})
export class RoutesModule { }
