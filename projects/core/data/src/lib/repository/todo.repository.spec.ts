import { TestBed } from '@angular/core/testing';

import { TodoRepository } from './todo.repository';
import { TodoRepositoryMock } from './todo.repository.mock';
import { TaskModel } from '../model/task.model';

describe('TodoRepository', () => {
  let todoRepository: TodoRepository;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: TodoRepository, useClass: TodoRepositoryMock }
    ],
    }).compileComponents();
    todoRepository = TestBed.inject(TodoRepository);
  });

  it('should be created', () => {
    expect(todoRepository).toBeTruthy();
  });

  it('should add a task to the task list', () => {
    const task:TaskModel = {text:'New task'};
    todoRepository.addTask(task);
    todoRepository.getTodoList().subscribe(tasks => {
        expect(tasks.length).toBe(1);
        expect(tasks[0]).toBe(task);
    });
  });

});
