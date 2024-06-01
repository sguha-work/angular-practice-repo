import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AjaxService } from './services/ajax.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public consumers$: Observable<any>|null;
  constructor(private ajax: AjaxService) {
    this.consumers$ = this.ajax.get(`https://localhost:1000/consumers`);
    console.log('consumers', this.consumers$);
  }
  ngOnInit(): void {

  }
}
