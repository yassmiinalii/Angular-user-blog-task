import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './home/pages/not-found-page/not-found-page.component';

const routes: Routes = [

  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '**', component: NotFoundPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
