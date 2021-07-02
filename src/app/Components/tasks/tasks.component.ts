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
     // get the tasks :
     (tasks) => this.tasks = tasks);
  }

// Is the method that deletes the task :
  // OneTask is the argument received from the task-item component from the
  // Event Emitter
  deleteTask(task: Task) {
    // similar to the fetch function
    this.taskService
      .deleteTask(task)
      .subscribe(
      // return the tasks without the deleted one (filtering it) :
      () => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

// function to change the reminder !
  ToggleReminder(task: Task) {
    // does work but the changes are not updated in the server !
    task.reminder = !task.reminder ;
    // Update the server :
    this.taskService
      .updateTaskReminder(task)
      .subscribe() // nothing to add here xDD
  }
}
