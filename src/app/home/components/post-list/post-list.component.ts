import { Component, OnInit, Pipe } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { IPost } from 'src/app/shared/models/ipost';

import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<IPost[]>;
  error : string

  constructor(
    private apiServices: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getUserPostsByQueryParams();
  }

  getUserPostsByQueryParams() {
    this.posts$ = this.route.queryParams.pipe(
      switchMap(queryParams => {
        //check If there userId queryParam
        if(queryParams?.['userId']){
          //if it return a new subscribe to get posts with handling error
          const userId = +queryParams?.['userId'];
          return this.apiServices.getPostsByUserId(userId).pipe(
            catchError(error => {
               this.error = 'An error occurred while fetching posts!.'
              return of();
            }))
        }
        return []
      })
    );
  }
}
