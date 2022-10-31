import { Component, OnInit } from '@angular/core';
import { TodoState } from '../../store/todo/todo.reducer';
import { select, Store } from '@ngrx/store';
import {
  TodoCreateActions,
  TodoDeleteActions,
  TodoEditActions,
  TodoToggleActions
} from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList$ = this.store$.pipe(select(todoListSelector))

  constructor(
      private store$: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateActions({name}))
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteActions({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleActions({id}))
  }

  onEdit($event: { id: number; name: string }) {
    this.store$.dispatch(new TodoEditActions($event));
  }
}
