import { LoginComponent } from './user/login/login.component';
import { RegistrationModalComponent } from './user/registration/registration-modal.component';
import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";
import { DatesComponent } from './dates/dates.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent, children: [
            { path: 'registration', component: RegistrationModalComponent },
            { path: 'login', component: LoginComponent }
        ]
    },
    { path: 'find-love', component: FindLoveComponent },
    { path: 'dates', component: DatesComponent },
    { path: 'user/profile', component: ProfileComponent }
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes, {
        onSameUrlNavigation: "reload"
    })]
})
export class AppRoutingModule { }