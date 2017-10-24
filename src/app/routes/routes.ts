import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './todos/todos.module#TodosModule' }
        ]
    },


    // Not found
    { path: '**', redirectTo: 'home' }

];
