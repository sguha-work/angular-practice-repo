import { Routes } from '@angular/router';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';

export const routes: Routes = [
    {
        path:"",
        component:ParentComponentComponent,
        pathMatch:'full'
    },
    { path: 'another', loadComponent: () => import('./components/another-parent-component/another-parent-component.component').then(m => m.AnotherParentComponentComponent) }
];
