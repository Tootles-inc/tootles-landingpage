import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
import{ AppComponent } from './app.component';
import{TasksComponent} from './components/tasks/tasks.component';
import{SignupsComponent} from './components/signups/signups.component';

@NgModule({
    imports:    [ BrowserModule, HttpModule, FormsModule ],
    declarations: [AppComponent, TasksComponent, SignupsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }