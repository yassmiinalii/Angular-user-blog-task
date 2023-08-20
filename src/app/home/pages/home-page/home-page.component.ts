import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit {

  constructor(private stor: StoreService , private route : ActivatedRoute){}
  ngOnInit(): void {
    this.stor.init()
  }

  queryParam$ = this.route.queryParams
  // .pipe(
  //   switchMap(queryParams => {
  //     //check If there userId queryParam
  //     if(queryParams?.['userId']){
  //       //if it return a new subscribe to get posts with handling error
  //       // const userId = +queryParams?.['userId'];
  //       // return this.apiServices.getPostsByUserId(userId).pipe(
  //       //   catchError(error => {
  //       //      this.error = 'An error occurred while fetching posts!.'
  //       //     return of();
  //       //   }))
  //     }
  //     return []
  //   })
  // )

}
