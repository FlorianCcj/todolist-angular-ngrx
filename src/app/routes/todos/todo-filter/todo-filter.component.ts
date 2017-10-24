import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent {

  @Input() filters;
  @Output() changeFilter = new EventEmitter<any>();
  filter : FormControl;

  constructor() {
    this.filter = new FormControl();
  }

  @Input() 
  set active( val ) {
    this.filter.setValue(val);
  }
}
