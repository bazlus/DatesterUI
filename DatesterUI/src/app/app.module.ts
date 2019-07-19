import { MustMatchDirective } from './directives/must-match.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import { FindLoveComponent } from './find-love/find-love.component';
import { GalleriaModule } from 'primeng/galleria';
import { AppRoutingModule } from './app-router.module';
import { MatchService } from './services/match.service';
import { DatesComponent } from './dates/dates.component';
import { UserComponent } from './user/user.component';
import { RegistrationModalComponent } from './user/registration/registration-modal.component';
import { LoginComponent } from './user/login/login.component';
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MenuComponent,
    FindLoveComponent,
    DatesComponent,
    UserComponent,
    RegistrationModalComponent,
    MustMatchDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    GalleriaModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: false
    })
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
