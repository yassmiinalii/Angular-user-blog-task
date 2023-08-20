
import { Injectable } from '@angular/core';
import {  Observable, ReplaySubject, Subject, catchError, finalize, map, of, take } from 'rxjs';
import { IUser } from 'src/app/shared/models/iuser';
import { ApiService } from '../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private usersSubject = new ReplaySubject<IUser[]>(1);
  users$: Observable<IUser[]> = this.usersSubject.asObservable();
  private usersErrorSubject = new Subject<string>();
  usersError$: Observable<string> = this.usersErrorSubject.asObservable();

  constructor(private apiService: ApiService) {}


  init() {
    const users$ = this.apiService.getAllUsers();
    users$
      .pipe(
        catchError(error => {
          this.usersErrorSubject.next('An error occurred while fetching users.');
          return of([]);
        }),
        finalize(() => this.usersErrorSubject.complete()),
      )
      .subscribe((users: IUser[]) => this.usersSubject.next(users));
  }

  selectUserById(userId: number) {
    return this.users$.pipe(
      catchError(() => of(null)),
      map((users) => users?.find((user) => user.id === userId) || null),
    );
  }

}
