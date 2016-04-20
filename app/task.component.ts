import {Component,Input} from 'angular2/core';
import {TodoItem} from './todo';

@Component({
    selector: "task-detail",
    template: `    
        <h1 *ngIf="currentTask">{{currentTask.title}}</h1>
    `
})

export class TaskComponent {
    @Input()currentTask: TodoItem
}