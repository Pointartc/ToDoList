import { Component, OnInit } from '@angular/core';
import {toDo} from '../shared/interface/interface';

@Component({
  selector: 'app-todo-book',
  templateUrl: './todo-book.component.html',
  styleUrls: ['./todo-book.component.scss']
})
export class TodoBookComponent implements OnInit {
  filter: 'all' | 'active' | 'done' = 'all'
  allItems = [
    {description: 'eat', done: false, inProgress: false},
    {description: 'sleep', done: false, inProgress: false},
    {description: 'learn', done: false, inProgress: false},
    {description: 'play', done: true, inProgress: false},
    {description: 'go to walk', done: true, inProgress: false},
  ]

  ngOnInit(): void {

  }

}
