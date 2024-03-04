import { Component, Input } from "@angular/core";
import { todoTasks } from "../data/todoTasks";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
    @Input('errorMessageProp') errorMessage = '';

    todoTasks = todoTasks;
    error = '';
}