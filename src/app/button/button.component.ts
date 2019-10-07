import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public label: string;
  @Output() public clicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  public onClick(): void {
    this.clicked.emit();
  }
}
