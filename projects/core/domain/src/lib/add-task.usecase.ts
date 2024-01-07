import { Injectable } from "@angular/core";
import { TaskModel, TodoRepository } from "../../../data/src/public-api";

@Injectable({
    providedIn: 'root'
})
export class AddTaskUseCase {

    constructor(private todoRepository: TodoRepository) { }

    execute(task:TaskModel) {
        this.todoRepository.getTodoList().subscribe(result => {
            if (!result.find(item => item.text == task.text)) {
                this.todoRepository.addTask(task);
            }
        })
    }
}