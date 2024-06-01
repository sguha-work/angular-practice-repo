import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormshomeComponent } from './components/formshome/formshome.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplatedrivenformComponent } from './components/templatedrivenform/templatedrivenform.component';

const routes: Routes = [
    {
        path: '',
        component: FormshomeComponent,
        children: [
            {
                path: 'reactive',
                component: ReactiveformComponent
            },
            {
                path: 'template-driven',
                component: TemplatedrivenformComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
