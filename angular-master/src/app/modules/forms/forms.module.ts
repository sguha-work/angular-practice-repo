import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { FormshomeComponent } from './components/formshome/formshome.component';
import { FormsRoutingModule } from './forms-routing.module';



@NgModule({
  declarations: [
    TemplatedrivenformComponent,
    ReactiveformComponent,
    FormshomeComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
