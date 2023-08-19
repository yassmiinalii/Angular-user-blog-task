import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements OnInit {

  constructor(private stor: StoreService){}
  ngOnInit(): void {
    this.stor.init()
  }


}
