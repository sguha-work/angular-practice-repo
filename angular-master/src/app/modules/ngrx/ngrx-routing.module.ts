import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxExampleComponent } from './components/ngrx-example/ngrx-example.component';

const routes: Routes = [
    {
        path: '',
        component: NgrxExampleComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgrxRoutingModule { }
