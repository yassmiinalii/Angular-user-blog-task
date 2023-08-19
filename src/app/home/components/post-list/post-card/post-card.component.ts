
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class PostCardComponent implements  OnInit , OnChanges {

  @Input() post: IPost;
  user$ :  Observable<IUser | undefined>
  isViewComments: boolean = false;

  constructor(private store : StoreService){}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.post.currentValue){
      this.user$ = this.store.selectUserById(this.post.userId)
    }
  }

  onViewComments() : void{
    this.isViewComments = !this.isViewComments
  }




}
