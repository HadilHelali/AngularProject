import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'my-app'; // properties of the component
  // it would be better to specify the type !! here a number wouldn't work
  // when using the tag <app-root title='Another One'></app-root>
}
