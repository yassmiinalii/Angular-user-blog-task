import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { ApiService } from '../services/api/api.service';
import { IUser } from 'src/app/shared/models/iuser';
import { of, throwError } from 'rxjs';

describe('StoreService', () => {
  let storeService: StoreService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const apiServiceSpyObj = jasmine.createSpyObj('ApiService', ['getAllUsers']);
    TestBed.configureTestingModule({
      providers: [
        StoreService,
        { provide: ApiService, useValue: apiServiceSpyObj }
      ]
    });
    storeService = TestBed.inject(StoreService);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(storeService).toBeTruthy();
  });

  it('should fetch and initialize users', () => {
    const mockUsers: IUser[] = [{ id: 1, name: 'User 1', email: 'user1@mail.com', username: 'username' }];
    apiServiceSpy.getAllUsers.and.returnValue(of(mockUsers));

    storeService.init();

    storeService.users$.subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
  });

  it('should handle error while fetching users', () => {
    apiServiceSpy.getAllUsers.and.returnValue(throwError('Error'));

    storeService.init();

    storeService.usersError$.subscribe(error => {
      expect(error).toBe('An error occurred while fetching users.');
    });
  });


  it('should select user by ID', () => {
    const mockUsers: IUser[] = [
      { id: 1, name: 'User 1', email: 'user1@mail.com', username: 'username' },
      { id: 2, name: 'User 2', email: 'user2@mail.com' , username: 'username'}
    ];
    apiServiceSpy.getAllUsers.and.returnValue(of(mockUsers));

    storeService.init();

    storeService.selectUserById(2).subscribe(user => {
      expect(user).toEqual(mockUsers[1]);
    });
  });

  it('should handle errors while selecting user by ID', () => {
    apiServiceSpy.getAllUsers.and.returnValue(of([]));

    storeService.init();

    storeService.selectUserById(2).subscribe(user => {
      expect(user).toBeNull();
    });
  });

});
