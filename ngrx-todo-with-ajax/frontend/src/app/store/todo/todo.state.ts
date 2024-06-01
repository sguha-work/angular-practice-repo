import { TodoModel } from "../../interfaces/todo.interface";
export interface TodoState {
    TodoList: Array<TodoModel>
}

export const InitialTodoState: TodoState = {
    TodoList: []
};