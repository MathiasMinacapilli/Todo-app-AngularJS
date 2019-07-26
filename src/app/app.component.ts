import { Component } from '@angular/core';

// Import class so we can register it as dependency injection token
import { TodoDataService } from './todo-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

    providers: [TodoDataService]
})
export class AppComponent {

    // Ask Angular DI system to inject the dependency
    // associated with the dependency injection token `TodoDataService`
    // and assign it to a property called `todoDataService`
    constructor(private todoDataService: TodoDataService) {
    }

    // Service is now available as this.todoDataService
    toggleTodoComplete(todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    newTodo: Todo = new Todo();


    addTodo() {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }


    removeTodo(todo) {
        this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }
}
