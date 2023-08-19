import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/shared/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) {
  }


  getAllUsers() {
    return this.httpClient.get<IUser[]>( 'users').pipe(
    );
  }
}
