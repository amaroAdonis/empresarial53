import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'room-button',
  templateUrl: './room-button.component.html',
  styleUrls: ['./room-button.component.scss']
})
export class RoomButtonComponent {

  @Input()
  public active:boolean = false;

  @Output("click")
  private clickEvent:EventEmitter<MouseEvent> = new EventEmitter();


  public buttonClick(event:MouseEvent):void {
    this.clickEvent.emit(event);
  }
}
