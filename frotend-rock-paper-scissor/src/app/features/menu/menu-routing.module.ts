import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoggedGuard } from 'src/app/authentication/guards/user-logged.guard';
import { MenuComponent } from './menu.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [UserLoggedGuard],
        component: MenuComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
