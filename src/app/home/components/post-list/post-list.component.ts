import { Component, OnInit, Pipe } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { IPost } from 'src/app/shared/models/ipost';

import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<IPost[]>;
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
        if(queryParams?.['userId']){
          const userId = +queryParams?.['userId'];
          return this.apiServices.getPostsByUserId(userId);
        }
        return []
      })
    );
  }
}
