import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable, catchError, of } from 'rxjs';

import { IComment } from '../../../../../shared/models/icomment';
import { ApiService } from 'src/app/core/services/api/api.service';

const COMMENT_ANIMATION =  [trigger('commentAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-10)' }),
    animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10)' })),
  ]),
])]

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  animations: [...COMMENT_ANIMATION ],
})
export class CommentsComponent implements OnInit {

  @Input() postId : number;
  comments$ : Observable<IComment[] > ;
  error : string;
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    if (this.postId) {
      this.comments$ = this.apiService.getCommentsByPostId(this.postId).pipe(
        catchError((error) => {
          this.error = 'An error occurred while fetching comments!';
          this.cdr.detectChanges();
          return of();
        })
      );
    }
  }

  identify(index:number, comment:IComment){
    return comment.id;
  }



}
