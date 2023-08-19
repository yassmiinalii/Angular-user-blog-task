import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from './components/users-navbar/users.component';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    UsersComponent,
    PostCardComponent,
    PostListComponent,
    HomePageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgOptimizedImage


  ]
})
export class HomeModule { }
