import { Observable, catchError, finalize, of, take, throwError } from 'rxjs';
import { IComment } from '../../../../../shared/models/icomment';

import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  @Input() postId : number;
  comments$ : Observable<IComment[] > ;
  error = '';
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
