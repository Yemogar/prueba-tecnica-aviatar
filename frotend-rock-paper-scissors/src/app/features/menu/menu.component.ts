import { Component } from '@angular/core';

import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  constructor(private authService: AuthenticationService) {}

  public logout(): void {
    this.authService.logout();
  }
}

