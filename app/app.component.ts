import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{task.id}}</h1>
        <h1 [style.color]="task.priority">{{task.title}}</h1>
        <input [(ngModel)]="task.title" placeholder="Task title"/>
        
        <input type="button" (click)="showTitle(task.title)" />
    `
})

export class AppComponent {
    task: TodoItem = {
        id: 1,
        title: "Clean up your room bro!",
        priority: "red"
    }

    showTitle(title: string) {
        alert(title);
    }
}

export class TodoItem {
    id: number;
    title: string;
    priority: string;
}