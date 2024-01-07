import { Component } from '@angular/core';
import { TodoRepository } from '../../../../core/data/src/public-api';
import { TaskModel } from '../../../../core/data/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  tasks:TaskModel[] = []

  constructor(private todoRepository:TodoRepository) {}

  ngOnInit() {
    this.todoRepository.getTodoList().subscribe(result => {
      this.tasks = result
    })
  }

}
