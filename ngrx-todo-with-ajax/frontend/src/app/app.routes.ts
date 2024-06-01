import { Routes } from '@angular/router';
import { AddTodoPageComponent } from './components/pages/add-todo-page/add-todo-page.component';
import { ListTodoPageComponent } from './components/pages/list-todo-page/list-todo-page.component';

export const routes: Routes = [
    { path: 'todo/add', component: AddTodoPageComponent },
  { path: 'todo/list', component: ListTodoPageComponent },
];
