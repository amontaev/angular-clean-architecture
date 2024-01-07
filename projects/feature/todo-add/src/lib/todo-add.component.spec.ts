import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { AddTaskUseCase } from '../../../../core/domain/src/public-api';
import { TodoRepository, TodoRepositoryMock } from '../../../../core/data/src/public-api';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAddComponent],
      providers: [
        AddTaskUseCase,
        { provide: TodoRepository, useClass: TodoRepositoryMock }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
