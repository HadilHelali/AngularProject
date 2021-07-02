import { Component, OnInit, Input } from '@angular/core';
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

}
