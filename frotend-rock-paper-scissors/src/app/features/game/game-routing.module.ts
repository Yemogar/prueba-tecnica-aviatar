import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedGuard } from 'src/app/authentication/guards/user-logged.guard';
import { GameComponent } from './game.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [UserLoggedGuard],
        component: GameComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
