import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurepipeComponent } from './components/purepipe/purepipe.component';
import { ImpurepipeComponent } from './components/impurepipe/impurepipe.component';
import { PipeshomeComponent } from './components/pipeshome/pipeshome.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { FormsModule } from '@angular/forms';
import { BytesToMB } from './pipes/bytestomb.pipe';



@NgModule({
  declarations: [
    PurepipeComponent,
    ImpurepipeComponent,
    PipeshomeComponent,
    BytesToMB
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    FormsModule
  ]
})
export class PipesModule { }
