System.register(['angular2/core', './task.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, task_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_component_1_1) {
                task_component_1 = task_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tasks = [
                        { id: 1, title: "Clean up your room bro!", priority: "red" },
                        { id: 2, title: "Brush teeth", priority: "green" },
                        { id: 3, title: "Empty trash", priority: "blue" }
                    ];
                }
                AppComponent.prototype.saveNewTask = function (taskTitle) {
                    var newTask = {
                        id: this.tasks.length + 1,
                        title: taskTitle,
                        priority: "black"
                    };
                    this.tasks.push(newTask);
                };
                AppComponent.prototype.taskSelected = function (task) {
                    this.selectedTask = task;
                };
                AppComponent.prototype.showTitle = function (title) {
                    alert(title);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [task_component_1.TaskComponent],
                        template: "        \n        <ul>\n            <li *ngFor=\"#task of tasks\" (click)=\"taskSelected(task)\">\n                <div [style.color]=\"task.priority\">{{task.id}} - {{task.title}}</div>\n            <li>\n        </ul>\n        \n        <task-detail [currentTask]=\"selectedTask\"></task-detail>\n        \n        <input [(ngModel)]=\"newTaskTitle\"/>\n        <input type=\"button\" (click)=\"saveNewTask(newTaskTitle)\"/>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map