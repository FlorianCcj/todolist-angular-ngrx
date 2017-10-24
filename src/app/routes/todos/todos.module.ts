import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoIndexComponent } from './todo-index/todo-index.component';
import { TodoCreationComponent } from './todo-creation/todo-creation.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';

const routes: Routes = [
    { path: '', component: TodoIndexComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
  	TodoDetailComponent, 
  	TodoListComponent, 
  	TodoIndexComponent, 
  	TodoCreationComponent, TodoFilterComponent
  ]
})
export class TodosModule { }
