import { Component, NgModule, OnInit } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterModule} from '../../shared/footer/footer';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@NgModule({
  imports: [SvgViewerModule, MatButtonModule, FooterModule, RouterModule],
  exports: [Homepage],
  declarations: [Homepage],
})
export class HomepageModule {}
