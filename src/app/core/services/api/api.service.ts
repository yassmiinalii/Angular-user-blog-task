import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/models/icomment';
import { IPost } from 'src/app/shared/models/ipost';
import { IUser } from 'src/app/shared/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient,) {}

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>( 'users');
  }

  getPostsByUserId(userId: number){
    return this.httpClient.get<IPost[]>( `posts?userId=${userId}`);
  }

  getCommentsByPostId(postId : number){
    return this.httpClient.get<IComment[]>( `comments?postId=${postId}`);
  }

}
