import { Todo } from '../../models/todo';
import { TodoActions, todoActionsType } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
    idIncrement: number;
    todoList: Todo[];
}

const initialState: TodoState = {
    idIncrement: 1,
    todoList: []
}

export const todoReducer = (state = initialState, action: TodoActions) => {
    switch (action.type) {
        case  todoActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.idIncrement,
                        name: (<{ name: string }>action.payload).name,
                        completed: false
                    }
                ]
            }
        case  todoActionsType.toggle:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                todoList: state.todoList.map(todo => todo.id === (<{ id: number }>action.payload).id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo)
            }
        case  todoActionsType.delete:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                todoList: state.todoList.filter(todo => todo.id !== (<{ id: number }>action.payload).id)
            }

        case  todoActionsType.edit:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id == (<{ id: number, name: string }>action.payload).id ? {
                    ...todo,
                    name: (<{ id: number, name: string }>action.payload).name
                } : todo)
            }

        default:
            return state;
    }
}
