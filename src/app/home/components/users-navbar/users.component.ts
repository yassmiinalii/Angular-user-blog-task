import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IUser } from 'src/app/shared/models/iuser';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/store/store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ : Observable<IUser[]> = this.store.users$;
  constructor( private store : StoreService){}
  ngOnInit(): void { }

}
