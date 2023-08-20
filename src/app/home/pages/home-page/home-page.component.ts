import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit {

  queryParam$ = this.route.queryParams;

  constructor(private stor: StoreService , private route : ActivatedRoute){}

  ngOnInit(): void {
    this.stor.init()
  }

}
