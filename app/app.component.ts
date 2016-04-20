import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `        
        <ul>
            <li *ngFor="#task of tasks">
                <div [style.color]="task.priority">{{task.id}} - {{task.title}}</div>
            <li>
        </ul>
    `
})

export class AppComponent {
    tasks: TodoItem[] = [
        { id: 1, title: "Clean up your room bro!", priority: "red" },
        { id: 2, title: "Brush teeth", priority: "green" },
        { id: 3, title: "Empty trash", priority: "blue" }
    ]

    showTitle(title: string) {
        alert(title);
    }
}

export class TodoItem {
    id: number;
    title: string;
    priority: string;
}