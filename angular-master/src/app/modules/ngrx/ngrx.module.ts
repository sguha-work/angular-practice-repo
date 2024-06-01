import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './stores/counter/counter.reducer';

import {NgrxRoutingModule} from './ngrx-routing.module';
import { NgrxExampleComponent } from './components/ngrx-example/ngrx-example.component';
import { Counter1Component } from './components/counter1/counter1.component';
import { Counter2Component } from './components/counter2/counter2.component';



@NgModule({
  declarations: [
    NgrxExampleComponent,
    Counter1Component,
    Counter2Component
  ],
  imports: [
    CommonModule,
    NgrxRoutingModule,
    StoreModule.forRoot({count: counterReducer}, {})
  ]
})
export class NgrxModule { }
