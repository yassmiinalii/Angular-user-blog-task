import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/store/store.service';
import { IUser } from 'src/app/shared/models/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this.store.users$;
  usersError$ = this.store.usersError$;

  constructor( private store : StoreService){}
  ngOnInit(): void { }

  identify(index:number, user:IUser){
    return user.id;
  }

}
