import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
// import { TASKS } from '../../mock-tasks' ; //up two levels
// src -> app
// importing the service to use
import {TaskService} from "../../Services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

 // tasks: Task[] =   TASKS ;
  tasks: Task[] = [] ;
  // Adding the service to the constructor :
  //             name : type
  constructor(private taskService : TaskService) { }
  ngOnInit(): void {
    // using the service here :
    // the subscribe is like a promise
   this.taskService.getTasks().subscribe(
     (tasks) => this.tasks = tasks);
  }

}
