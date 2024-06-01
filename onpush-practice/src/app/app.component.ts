import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mycomponent1Component } from './components/mycomponent1/mycomponent1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Mycomponent1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit, OnChanges {
  title = 'onpush-practice';
  index: number = 0;
  ngOnInit(): void {
    window.setInterval(()=>{
      this.index+=1;
    },1000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("App component changed");
  }
}
