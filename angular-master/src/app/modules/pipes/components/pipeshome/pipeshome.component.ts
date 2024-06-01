import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeshome',
  templateUrl: './pipeshome.component.html',
  styleUrls: ['./pipeshome.component.scss']
})
export class PipeshomeComponent {
  public date: Date;
  constructor() {
    this.date = new Date();
  }
}
