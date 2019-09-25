import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {KAGIDOCS_ROUTES} from './routes';
import {RouterModule} from '@angular/router';
import {KagidocsApp} from './kagidocs-app';
import {HomepageModule} from './pages/homepage';
import {FooterModule } from './shared/footer/footer';
import {NavBarModule} from './shared/navbar';
import {SvgViewerModule} from './shared/svg-viewer/svg-viewer';
import {DocumentationItems} from './shared/documentation-items/documentation-items';

import {ComponentListModule} from './pages/component-list';
import {ComponentViewerModule} from './pages/component-viewer/component-viewer';
import {ComponentCategoryListModule} from './pages/component-category-list/component-category-list';
import {ComponentSidenavModule} from './pages/component-sidenav/component-sidenav';
import {ComponentPageTitle} from './pages/page-title/page-title';
import {ComponentHeaderModule} from './pages/component-page-header/component-page-header';
import {DocViewerModule} from './shared/doc-viewer/doc-viewer-module';


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
    ComponentCategoryListModule,
    ComponentHeaderModule,
    ComponentListModule,
    ComponentSidenavModule,
    ComponentViewerModule,
    DocViewerModule,
  ],
  providers: [
    DocumentationItems,
    ComponentPageTitle,
  ],
  bootstrap: [KagidocsApp]
})
export class AppModule { }
