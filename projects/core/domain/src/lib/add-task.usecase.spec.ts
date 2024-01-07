import { TestBed } from '@angular/core/testing';
import { TaskModel, TodoRepository, TodoRepositoryMock } from '../../../data/src/public-api';
import { AddTaskUseCase } from './add-task.usecase';

describe('AddTaskUseCase', () => {
  let todoRepository: TodoRepository;
  let addTaskUseCase: AddTaskUseCase;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: TodoRepository, useClass: TodoRepositoryMock }
    ],
    }).compileComponents();
    todoRepository = TestBed.inject(TodoRepository);
    addTaskUseCase = new AddTaskUseCase(todoRepository)
  });

  it('should be created', () => {
    expect(addTaskUseCase).toBeTruthy();
  });

  it('should add a task to the task list', () => {
    const task:TaskModel = {text:'New task'};
    addTaskUseCase.execute(task);
    todoRepository.getTodoList().subscribe(tasks => {
        expect(tasks.length).toBe(1);
        expect(tasks[0]).toEqual(task);
    });
  });

  it('should return the task list', () => {
    const tasks: TaskModel[] = [{ text: 'Task 1' }, { text: 'Task 2' }];
    
    addTaskUseCase.execute(tasks[0]);
    addTaskUseCase.execute(tasks[1]);

    todoRepository.getTodoList().subscribe(taskList => {
      expect(taskList).toEqual(tasks);
    });
  });

  it('should add only one task', () => {
    const tasks: TaskModel[] = [{ text: 'Task 1' }, { text: 'Task 1' }];
    
    addTaskUseCase.execute(tasks[0]);
    addTaskUseCase.execute(tasks[1]);

    todoRepository.getTodoList().subscribe(taskList => {
        expect(taskList.length).toBe(1);
        expect(taskList[0]).toEqual(tasks[0]);
    });
  });

});
