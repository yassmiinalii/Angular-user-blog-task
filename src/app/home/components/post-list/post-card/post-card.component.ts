
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/store/store.service';
import { IPost } from 'src/app/shared/models/ipost';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent implements OnInit  {

  @Input() post: IPost;
  user$ :  Observable<IUser | null>
  isViewComments: boolean = false;
  isUserImageLoaded : boolean = false;
  isPostImageLoaded : boolean = false;

  constructor(private store : StoreService){}

  ngOnInit(): void {
    if(this.post.userId){
      this.user$ = this.store.selectUserById(this.post.userId)
    }
  }

  onViewComments() : void{
    this.isViewComments = !this.isViewComments
  }

  onLoadUserImage(){
    this.isUserImageLoaded = true;
  }
  onLoadPostImage(){
    this.isPostImageLoaded = true;
  }

}
