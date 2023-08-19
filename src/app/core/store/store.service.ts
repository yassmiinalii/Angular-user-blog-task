import { ApiService } from './../../home/services/api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, first, map, take, tap } from 'rxjs';
import { IUser } from 'src/app/shared/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private UsersSubject = new BehaviorSubject<IUser[]>([]);
  users$: Observable<IUser[]> = this.UsersSubject.asObservable();

  constructor( private apiService: ApiService) { }

  init() {
    const users$ = this.apiService.getAllUsers();
    users$.pipe(
      // Missing point, how to stop operators execution after error happened
      //Handle error
    ).subscribe((users: IUser[]) => this.UsersSubject.next(users));
  }

  selectUserById(userId: number) {
    return this.users$.pipe(
      map((users) => users.find((user) => user.id == userId)),
      filter((user) => !!user),
      first()
    );
  }

}
