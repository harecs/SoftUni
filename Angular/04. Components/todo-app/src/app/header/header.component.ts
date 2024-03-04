import { Component, EventEmitter, Output } from "@angular/core";

import { todoTasks } from "../data/todoTasks";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() onErrorMessage = new EventEmitter<string>();

    addNewToDo(todoTask: string): string | void {
        if (!todoTask) {
            const errorMessage: string = 'Enter the content of the task!';
            return this.onErrorMessage.emit(errorMessage);
        }

        todoTasks.push({
            task: todoTask,
            completed: false
        });
    }

    enterKeyCheck(e: Event) {
        const event = e as KeyboardEvent;

        if (event.key == 'Enter') {
            this.addNewToDo((<HTMLInputElement>event.target).value);
        }
    }
}