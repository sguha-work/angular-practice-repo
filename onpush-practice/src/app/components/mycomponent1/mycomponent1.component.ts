import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-mycomponent1',
  standalone: true,
  imports: [],
  templateUrl: './mycomponent1.component.html',
  styleUrl: './mycomponent1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mycomponent1Component implements OnChanges, OnInit, DoCheck{
  constructor(private changedetection: ChangeDetectorRef) {

  }
  //@Input() counter: string = "";
  ngOnChanges(changes: SimpleChanges): void {
    console.log("mycomponent1 changed")
  }
  ngOnInit(): void {
    console.log("mycomponent1 inititated");
    this.changedetection.detach();
  }
  ngDoCheck(): void {
    console.log("mycomponent1 docheck fired");
  }
}
