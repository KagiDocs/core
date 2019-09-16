import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatMenuModule} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {
}

@NgModule({
  imports: [
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {}
