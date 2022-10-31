import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
    selector: 'app-todo-list-ui',
    templateUrl: './todo-list-ui.component.html',
    styleUrls: ['./todo-list-ui.component.scss']
})
export class TodoListUiComponent implements OnInit {
    editIds: number[] = [];
    @Input()
    todoList: Todo[] = [];
    @Output()
    delete = new EventEmitter<number>();
    @Output()
    edit = new EventEmitter<{id: number, name: string }>();
    @Output()
    toggle = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onDelete(id: number) {
        this.delete.emit(id);
    }

    onToggle(id: number) {
        this.toggle.emit(id);
    }

    onEdit(name: string, id: number) {
        this.editIds = this.editIds.filter(idEdit=>idEdit!==id)
        this.edit.emit({id, name});
    }

    onEditMode(id: number) {
        // this.edit.emit({id, name});
        this.editIds.push(id);
    }
}
