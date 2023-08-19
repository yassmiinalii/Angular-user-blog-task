import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {

  isViewComments: boolean = false;
  onViewComments() : void{

    this.isViewComments = !this.isViewComments

  }
}
