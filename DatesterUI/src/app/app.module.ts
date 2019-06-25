import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import { FindLoveComponent } from './find-love/find-love.component';
import { GalleriaModule } from 'primeng/galleria';
import { AppRoutingModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MenuComponent,
    FindLoveComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    GalleriaModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
