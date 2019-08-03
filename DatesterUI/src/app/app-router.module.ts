import { LoginComponent } from './user/login/login.component';
import { RegistrationModalComponent } from './user/registration/registration-modal.component';
import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";
import { DatesComponent } from './dates/dates.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuardService as AuthGuard } from './services/guards/auth-guard.service';
import { ReverseAuthGuardService as ReverseAuthGuard } from "./services/guards/auth-guard-reverse.service";

const routes: Routes = [
    { path: '', redirectTo: 'user/profile', pathMatch: 'full', canActivate: [AuthGuard] },
    {
        path: 'user', component: UserComponent, children: [
            { path: 'registration', component: RegistrationModalComponent, canActivate: [ReverseAuthGuard] },
            { path: 'login', component: LoginComponent, canActivate: [ReverseAuthGuard] }
        ]
    },
    { path: 'find-love', component: FindLoveComponent, canActivate: [AuthGuard] },
    { path: 'dates', component: DatesComponent, canActivate: [AuthGuard] },
    { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: "reload"
    })]
})
export class AppRoutingModule { }