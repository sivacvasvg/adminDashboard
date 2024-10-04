import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './layout/page/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',redirectTo:'layout',pathMatch:'full'},
    {path:'layout',component: LayoutComponent, 
        children:[
            {path:'',redirectTo:'dashboard',pathMatch:'full'},
            {path:'dashboard',component: DashboardComponent},
        ]
    }
];
