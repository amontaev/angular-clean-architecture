import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TodoRepository } from './todo.repository';
import { TaskModel } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryMock extends TodoRepository {

  private taskDataSource = new BehaviorSubject<TaskModel[]>([])

  private taskData = this.taskDataSource.asObservable()

  override addTask(text:string): void {
    const currentValue = this.taskDataSource.value;
    const updatedValue = [...currentValue, {text}];
    this.taskDataSource.next(updatedValue);
  }
  
  override getTodoList(): Observable<TaskModel[]> {
    return this.taskData
  }

}