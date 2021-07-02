import { Component, OnInit } from '@angular/core';
// For the Toggle Add task
import {UiService} from '../../Services/ui.service';
import {Subscription} from 'rxjs'
// for routers :
import {Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Tack Tracker';
  // For the Toggle Add task
  showAddTask : boolean  ;
  subscription : Subscription  ;
  // inject the service and the router
  constructor(private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe(
      // catching the changes here
      value => this.showAddTask = value
    )
  }
  ngOnInit(): void {
  }
  // Appear or make diappear the task form :
  toggleAddTask() {
    // calls the toggleAddTask from the service :
this.uiService.toggleAddTask();
  }

// for the router
  hasRoute(route : string) {
    return this.router.url === route ;
  }
}
