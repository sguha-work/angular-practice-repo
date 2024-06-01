import { createAction, props } from "@ngrx/store";
import { TodoModel } from "../../interfaces/todo.interface";

export const action_addTodo = createAction(
    '[ToDo] addTodo',
    props<{ 
        newTodo: TodoModel; 
    }>()
)

export const action_deleteTodo = createAction(
    '[ToDo] deleteTodo',
    props<{ 
        todoTitle: string; 
    }>()
)

export const action_fetchTodo = createAction(
    '[ToDo] fetchTodo'
)

export const action_populateTodo = createAction(
    '[ToDo] populateTodo',
    props<{ 
        data: Array<TodoModel>; 
    }>()
)