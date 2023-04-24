import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { map, Observable } from 'rxjs';
import { FilterEnum } from '../enum/filterEnum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  noToDoClass$: Observable<boolean>
  activeCount$: Observable<number>
  itemsLeftText$: Observable<string>
  filter$: Observable<FilterEnum>
  filterEnum = FilterEnum

  constructor(private todosService: TodosService) {
    this.activeCount$ = this.todosService.todos$.pipe(map(
      (todos) => todos.filter((todo) => !todo.isCompleted).length)
    )
    // todo remade correct-name
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} Left`)
    )
    this.noToDoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    )
    this.filter$ = this.todosService.filter$

  }

  ngOnInit(): void {
  }

  changeFilter($event: Event, filterName: FilterEnum): void {
    $event.preventDefault()
    this.todosService.changFilter(filterName)
    console.log('FilterEnum', filterName)

  }
}
