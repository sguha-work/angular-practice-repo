import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-purepipe',
  templateUrl: './purepipe.component.html',
  styleUrls: ['./purepipe.component.scss']
})
export class PurepipeComponent implements OnInit,OnChanges,DoCheck {
  public sizeInBytes: number;
  public testTimerValue: number;
  constructor() {
    this.sizeInBytes = 1;
    this.testTimerValue = 0;
  }
  ngOnInit(): void {console.log('on init called');
    window.setInterval(()=>{
      this.testTimerValue += 1;
    },1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('component modified');
  }
  ngDoCheck(): void {
    console.log('ui modified');
  }
}
