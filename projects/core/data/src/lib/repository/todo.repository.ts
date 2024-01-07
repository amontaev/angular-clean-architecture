import { Observable } from 'rxjs';
import { TaskModel } from '../model/task.model';

export abstract class TodoRepository {
  abstract addTask(task:TaskModel): void
  abstract getTodoList(): Observable<TaskModel[]>
}