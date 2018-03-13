import { Component, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})
export class CardComponent {
    @Input() task: Task;

    statusToggle() {
        if (this.task.started === true) {
            this.task.started = false;
            this.task.inProgress = true;
        } else if (this.task.inProgress === true) {
            this.task.inProgress = false;
            this.task.completed = true;
        } else {
            this.task.completed = false;
            this.task.started = true;
        }
    }
    removeTask() {
        let task = this.task;
        this.task.hidden = true;
        console.log(task);

    }

}