import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
// EventEmitter : emits events in components
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined ; // doesn't work without undefined
  // generate a compile error
  @Input() color : string | undefined ;
  @Output() btnClick = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  onClick() {
    this.btnClick.emit();
    // emits from the button (btnClick)
  }
}
