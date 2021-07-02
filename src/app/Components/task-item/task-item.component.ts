import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() Onetask: Task  ; // should not add the undefined here
  // else you'll get a compiling error
  // because you have the lastest version of the TypeScript compiler you have
  // to initialize the property in the constructor !!!
  faTimes = faTimes ; // faTimes is a value and not a type

  // We're going to emit the task that we want to delete :
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter()

  constructor() {
    // initizing the property :
    this.Onetask = {
      text: '',
      day: '',
      reminder: false,
    }
    //*********************//
  }

  ngOnInit(): void {
  }
  // delete the task that received the event :
  // but we're not going to delete the task from itself but it should call
  // its parent which is tasks so we should emit the task that we want to delete

  onDelete(Onetask : Task) {
    this.onDeleteTask.emit(Onetask)
    // then we should go back to the parent component which is the tasks component
  }

  onToggle(Onetask : Task) {
    this.onToggleReminder.emit(Onetask)
  }
}
