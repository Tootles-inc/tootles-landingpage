import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {SignupService} from './services/signup.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[TaskService, SignupService]
})

export class AppComponent { }