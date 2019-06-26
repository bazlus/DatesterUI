import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";
import { DatesComponent } from './dates/dates.component';

const routes: Routes = [
    { path: 'find-love', component: FindLoveComponent },
    { path: 'dates', component: DatesComponent}
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }