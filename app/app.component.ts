import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{task.id}}</h1>
        <h1 [style.color]="task.priority">{{task.title}}</h1>
        <input value="{{task.title}}" placeholder="Task title"/>
    `
})

export class AppComponent {
    task: TodoItem = {
        id: 1,
        title: "Clean up your room bro!",
        priority: "red"
    }
}

export class TodoItem {
    id: number;
    title: string;
    priority: string;
}