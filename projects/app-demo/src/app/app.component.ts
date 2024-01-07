import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoAddComponent } from "../../../feature/todo-add/src/public-api";
import { TodoListComponent } from "../../../feature/todo-list/src/public-api";
import { TodoRepository } from '../../../core/data/src/public-api';
import { TodoRepositoryMock } from '../../../core/data/src/public-api';
import { AddTaskUseCase } from '../../../core/domain/src/public-api';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [
        AddTaskUseCase,
        { provide: TodoRepository, useClass: TodoRepositoryMock }
    ],
    imports: [CommonModule, RouterOutlet, TodoAddComponent, TodoListComponent]
})
export class AppComponent {
  title = 'app-demo';
}
