import { Observable } from 'rxjs';
import { IComment } from '../../models/icomment';

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() postId : number;
  comments$ : Observable<IComment[]> ;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    if(this.postId){
      this.comments$ = this.apiService.getCommentsByPostId(this.postId)
    }
  }



}
