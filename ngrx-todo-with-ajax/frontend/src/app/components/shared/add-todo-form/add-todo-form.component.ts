import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoModel } from '../../../interfaces/todo.interface';

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
  public todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder/*, private store: Store*/) {
    this.todoForm = this.formBuilder.group({
      title: ["", Validators.required],
      important: [true, Validators.required]
     });
   }
   public submitTodo(form: FormGroup) {
    if(form.valid) {
      let todo: TodoModel = {
        title: form.value.title,
        important: form.value.important,
        addedOn: Date.now()
      }
      console.log({todo});
      //this.store.dispatch(action_addTodo({ newTodo: todo }));
    } else {
  
    }
   }
}
