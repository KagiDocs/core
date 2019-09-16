import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {KAGIDOCS_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {KagidocsApp} from './kagidocs-app';
import {HomepageModule} from './pages/homepage';
import {FooterModule } from './shared/footer/footer';
import {NavBarModule} from './shared/navbar';
import {SvgViewerModule} from './shared/svg-viewer/svg-viewer';

@NgModule({
  declarations: [
    KagidocsApp,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(KAGIDOCS_ROUTES),
    HomepageModule,
    NavBarModule,
    FooterModule,
    SvgViewerModule,
  ],
  providers: [],
  bootstrap: [KagidocsApp]
})
export class AppModule { }
