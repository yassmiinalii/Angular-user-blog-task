import { Observable } from 'rxjs';
import { IComment } from '../../models/icomment';
import { ApiService } from './../../../home/services/api.service';
import { Component, Input, OnInit } from '@angular/core';

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
