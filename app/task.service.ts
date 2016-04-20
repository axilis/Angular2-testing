import {Injectable} from 'angular2/core';
import {TodoItem} from './todo'

@Injectable()
export class TaskService {
    getTasks(): TodoItem[] {
        return [
            { id: 1, title: "Clean up your room bro!", priority: "red" },
            { id: 2, title: "Brush teeth", priority: "green" },
            { id: 3, title: "Empty trash", priority: "blue" }
        ]
    }
}