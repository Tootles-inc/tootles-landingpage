import { Component } from '@angular/core';
import {SignupService} from '../../services/signup.service';
import {Signup} from '../../../Signup';

// CREATE A SIGNUP
console.log('hit 1');
@Component({
    moduleId: module.id,
    selector: 'signups',
    templateUrl: 'signups.component.html'
})

export class SignupsComponent {
    signups: Signup[];
    title: string;

    constructor(private signupService:SignupService){
        console.log('hitting constructor signupservice');
        this.signupService.getSignups()
            .subscribe(signups => {
                this.signups = signups;
            });
    }

    // addSignup(event) {
    //     event.preventDefault();
    //     var newSignup = {
    //         title: this.title,
    //         isDone: false
    //     }
        
    //     this.signupService.addSignup(newSignup)
    //         .subscribe(signup => {
    //             this.signups.push(signup);
    //             this.title = '';
    //         });
    // }
    // deleteTask(id) {
    //     var tasks = this.tasks;

    //     this.taskService.deleteTask(id).subscribe(data => {
    //         if(data.n == 1){
    //             for(var i = 0; i < tasks.length; i++) {
    //                 if(tasks[i]._id == id) {
    //                     tasks.splice(i, 1);
    //                 }
    //             }
    //         }
    //     });
    // }

    // updateStatus(task) {
    //     var _task = {
    //         _id: task._id,
    //         title: task.title, 
    //         isDone: !task.isDone
    //     };

    //     this.taskService.updateStatus(_task).subscribe(data => {
    //         task.isDone = !task.isDone;
    //     });
    // }
}