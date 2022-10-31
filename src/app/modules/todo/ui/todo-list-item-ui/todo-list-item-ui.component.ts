import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss']
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo: Todo = {} as Todo;
  @Output()
  delete = new EventEmitter<void>();
  @Output()
  edit = new EventEmitter<void>();
  @Output()
  toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
    this.delete.emit();
  }

  onToggle($event: MouseEvent, id: number) {
    $event.preventDefault()
    this.toggle.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
