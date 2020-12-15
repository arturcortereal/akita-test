import { Router } from '@angular/router';
import { TodoStore } from './../state/store';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  form!: FormGroup;
  todoForm: FormGroup;
  todoModel: Todo;
  todoFields: Array<FormlyFieldConfig>;

  constructor(
    private apiService: ApiService,
    private todoStore: TodoStore,
    private router: Router
  ) {
    this.todoForm = new FormGroup({});
    this.todoModel = new Todo();
    this.todoFields = this.todoModel.formFields();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  addTodo(todo: Todo) {
    this.todoStore.setLoading(true);
    this.apiService
      .addTodo(
        todo.title,
        todo.description
      )
      .subscribe((res) => {
        this.todoStore.update((state) => {
          return {
            todos: [...state.todos, res],
          };
        });
        this.todoStore.setLoading(false);
        this.router.navigateByUrl('');
      });
  }
}
