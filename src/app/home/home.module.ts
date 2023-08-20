import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module';
import { UsersComponent } from './components/users-navbar/users.component';
import { PostCardComponent } from './components/post-list/post-card/post-card.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostSkeltonLoaderComponent } from './components/post-list/post-card/post-skelton-loader/post-skelton-loader.component';




@NgModule({
  declarations: [
    UsersComponent,
    PostCardComponent,
    PostListComponent,
    HomePageComponent,
    PostSkeltonLoaderComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    NgOptimizedImage


  ]
})
export class HomeModule { }
