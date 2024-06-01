import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpurepipeComponent } from './components/impurepipe/impurepipe.component';
import { PipeshomeComponent } from './components/pipeshome/pipeshome.component';
import { PurepipeComponent } from './components/purepipe/purepipe.component';

const routes: Routes = [
    {
        path: '',
        component: PipeshomeComponent,
        children: [
            {
                path: 'pure',
                component: PurepipeComponent
            },
            {
                path: 'impure',
                component: ImpurepipeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PipesRoutingModule { }
