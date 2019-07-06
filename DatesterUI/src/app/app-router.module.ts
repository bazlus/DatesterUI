import { RegistrationModalComponent } from './user/registration-modal/registration-modal.component';
import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";
import { DatesComponent } from './dates/dates.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'user/registration', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent, children: [
            { path: 'registration', component: RegistrationModalComponent }
        ]
    },
    { path: 'find-love', component: FindLoveComponent },
    { path: 'dates', component: DatesComponent }
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }