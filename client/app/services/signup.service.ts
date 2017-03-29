import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService{
    constructor(private http:Http){
        console.log('Signup Service Initialized');
    }
    getSignups() {
        return this.http.get('/api/signups')
            .map(res => res.json());
    }
    addSignup(newSignup) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/signup', JSON.stringify(newSignup), {headers: headers})
            .map(res => res.json());
    }
    // deleteSignup(id){
    //     return this.http.delete('/api/signup/'+id)
    //         .map(res => res.json());
    // }

    // updateStatus(task){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
    //         .map(res => res.json());
    // }
    
}