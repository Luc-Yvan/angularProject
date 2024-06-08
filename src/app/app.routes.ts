import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { FormAtelierComponent } from './pages/form-atelier/form-atelier.component';

export const routes: Routes = [
    {
        path:"",
        children:[
            {
                path:"",
                component:FormComponent
            },
            {
                path:"create",
                component:FormAtelierComponent
            }
        ]

        
    },
    
];
