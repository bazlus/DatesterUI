import { LoginComponent } from './user/login/login.component';
import { RegistrationModalComponent } from './user/registration/registration-modal.component';
import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";
import { DatesComponent } from './dates/dates.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'User/Login', pathMatch: 'full' },
    {
        path: 'User', component: UserComponent, children: [
            { path: 'Registration', component: RegistrationModalComponent },
            { path: 'Login', component: LoginComponent }
        ]
    },
    { path: 'Find-love', component: FindLoveComponent },
    { path: 'Dates', component: DatesComponent }
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }