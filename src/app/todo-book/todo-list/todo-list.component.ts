import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { TodosInterface } from '../../shared/interface/interface';
import { TodosService } from '../../shared/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges{

  @Input('todo') todoProps!: TodosInterface;
  @Input('isEditing') isEditingProps!: boolean
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter()

  editingText: string = '';
  @ViewChild('textInput') textInput!: ElementRef;

  constructor(private todoServices: TodosService) {}
  ngOnInit(): void {
    this.editingText = this.todoProps.text
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['isEditingProps'].currentValue) {
    //   setTimeout(() => {
    //     this.textInput.nativeElement.focus()
    //   },0)
    // }
  }

  setTodoInEditMode(): void {
    console.log('setTodoInEditMode')
    this.setEditingIdEvent.emit(this.todoProps.id)
  }

  removeTodo(): void {
    this.todoServices.removeTodo(this.todoProps.id)
    console.log('remove')
  }

  toggleTodo(): void {
    this.todoServices.toggleTodo(this.todoProps.id)
    console.log('toggleTodo')
  }

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
  }

  changeTodo() {
    this.todoServices.changeTodo(this.todoProps.id, this.editingText)
    this.setEditingIdEvent.emit(null)
  }
}
