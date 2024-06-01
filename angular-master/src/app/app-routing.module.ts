import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pipes',
    loadChildren:()=>import('./modules/pipes/pipes.module').then(module=>module.PipesModule)
  },
  {
    path: 'forms',
    loadChildren:()=>import('./modules/forms/forms.module').then(module=>module.FormsModule)
  },
  {
    path: 'directives',
    loadChildren:()=>import('./modules/directives/directives.module').then(module=>module.DirectivesModule)
  },
  {
    path: 'ngrx',
    loadChildren:()=>import('./modules/ngrx/ngrx.module').then(module=>module.NgrxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
