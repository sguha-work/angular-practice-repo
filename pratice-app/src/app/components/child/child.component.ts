import { Component,Input, OnChanges, SimpleChanges,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() parentData = '';
  @Output() childValueChangedEvent = new EventEmitter<string>();
  childValue: string = '';
  public inputboxValueChanged(event: Event) {console.log(this.childValue)
    this.childValueChangedEvent.emit(this.childValue);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.childValue = this.parentData;
    console.log(changes);
  }
}
