import { NgModule } from '@angular/core';
import { FindLoveComponent } from './find-love/find-love.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'find-love', component: FindLoveComponent },
]


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }