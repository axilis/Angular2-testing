import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{task.id}}</h1>
        <h1>{{task.title}}</h1>
    `
})

export class AppComponent {
    task: TodoItem = {
        id: 1,
        title: "Clean up your room bro!"
    }
}

export class TodoItem {
    id: number;
    title: string;
}