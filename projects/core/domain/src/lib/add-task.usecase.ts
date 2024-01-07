import { Injectable } from "@angular/core";
import { TodoRepository } from "../../../data/src/public-api";
import { filter } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AddTaskUseCase {

    constructor(private todoRepository: TodoRepository) { }

    execute(text:string) {
        this.todoRepository.getTodoList().subscribe(result => {
            if (!result.find(item => item.text == text)) {
                this.todoRepository.addTask(text);
            }
        })
    }
}