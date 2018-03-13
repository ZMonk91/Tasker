import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    private tasks: Task[] = [];
    private currentTask = new Task(null, null, null, null, false, false, false);

    addTask() {
        let task = new Task(null, null, this.currentTask.title, null, false, true, false);
        this.tasks.push(task);
        this.currentTask.title = null;

    }
}