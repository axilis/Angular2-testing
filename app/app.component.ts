import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{task}}</h1>'
})

export class AppComponent {
    task = "Clean up";
}