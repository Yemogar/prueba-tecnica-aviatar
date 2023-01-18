import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MenuModule { }
