import { Component, OnInit } from '@angular/core';
import {Task} from '../../Task'
import { TASKS } from '../../mock-tasks' ; //up two levels
// src -> app
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS ;
  constructor() { }

  ngOnInit(): void {
  }

}
