import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {Task} from '../../Task';
// for the toggle :
import {UiService} from '../../Services/ui.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
// for a form we need a field for each input :
  text: string = "";
  day: string = "";
  reminder: boolean = false ;
  // for the toggle :
  showAddTask : boolean ;
  subscription : Subscription ;
// Emitting the event :
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter() ;
// adding the service for the toggle :
  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      // catching the changes here
      value => this.showAddTask = value
    )
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    if(!this.text){
      alert('Please add a task!')
      return ;
    }
    const newTask = {
      text: this.text ,
      day: this.day ,
      reminder: this.reminder
    }
    // Emitting the event :
    this.onAddTask.emit(newTask);
    // to clear after adding the task
    this.text = '' ;
    this.day = '' ;
    this.reminder = false ;

  }
}
