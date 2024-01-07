import { Component } from '@angular/core';
import { AddTaskUseCase } from '../../../../core/domain/src/public-api';
import { TaskModel } from '../../../../core/data/src/public-api';

@Component({
  selector: 'lib-todo-add',
  standalone: true,
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {

  task:TaskModel = {text:''}

  constructor(private addTaskUseCase:AddTaskUseCase) {}

  onChange(event: Event) {
    this.task.text = (event.target as HTMLInputElement).value;
  }

  addTask() {
    this.addTaskUseCase.execute(this.task)
  }
  
}
