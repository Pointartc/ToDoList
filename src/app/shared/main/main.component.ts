import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { TodosInterface } from '../interface/interface';
import { TodosService } from '../services/todos.service';
import { FilterEnum } from '../enum/filterEnum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  visibleTodos$: Observable<TodosInterface[]>
  noTodoClass$: Observable<boolean>
  isAllTodosSelected$: Observable<boolean>
  editingId: string | null = null

  constructor(private todosService: TodosService) {
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(map((todos => todos.every(todo => todo.isCompleted))))
    this.noTodoClass$ = this.todosService.todos$.pipe(map((todos) => todos.length === 0))
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(map(([todos, filter]: [TodosInterface[], FilterEnum]) => {
      if (filter === FilterEnum.active) {
        return todos.filter((todos) => !todos.isCompleted)
      } else if (filter === FilterEnum.completed) {
        return todos.filter((todos) => todos.isCompleted)
      }
      return todos
    }))
  }

  ngOnInit(): void {
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked)
  }

  setEditingId(editingId: string | null) {
    this.editingId = editingId
  }
}
