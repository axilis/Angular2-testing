import {Component} from 'angular2/core';
import {TodoItem} from './todo'
import {TaskComponent} from './task.component'

@Component({
    selector: 'my-app',
    directives: [TaskComponent],
    template: `        
        <ul>
            <li *ngFor="#task of tasks" (click)="taskSelected(task)">
                <div [style.color]="task.priority">{{task.id}} - {{task.title}}</div>
            <li>
        </ul>
        
        <task-detail [currentTask]="selectedTask"></task-detail>
        
        <input [(ngModel)]="newTaskTitle"/>
        <input type="button" (click)="saveNewTask(newTaskTitle)"/>
    `
})

export class AppComponent {
    tasks: TodoItem[] = [
        { id: 1, title: "Clean up your room bro!", priority: "red" },
        { id: 2, title: "Brush teeth", priority: "green" },
        { id: 3, title: "Empty trash", priority: "blue" }
    ]

    selectedTask: TodoItem;

    newTaskTitle: string;

    saveNewTask(taskTitle: string) {
        let newTask: TodoItem = {
            id: this.tasks.length + 1,
            title: taskTitle,
            priority: "black"
        }
        this.tasks.push(newTask);
    }

    taskSelected(task: TodoItem) {
        this.selectedTask = task;
    }

    showTitle(title: string) {
        alert(title);
    }
}
