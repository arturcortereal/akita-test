import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../environments/environment';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addTodo(title: string, description: string): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, { title, description });
  }

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<{ data: Todo[] }>(this.baseUrl)
      .pipe(map((res) => res.data));
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseUrl}/${id}`);
  }

  updateTodo(id: string, changes: any): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${id}`, changes);

  }
}
