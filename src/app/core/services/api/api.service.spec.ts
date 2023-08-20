import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { IUser } from 'src/app/shared/models/iuser';
import { IPost } from 'src/app/shared/models/ipost';
import { IComment } from 'src/app/shared/models/icomment';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // id: number;
  // name: string;
  // username: string;
  // email: string;
  it('should get all users', () => {
    const mockUsers: IUser[] = [{ id: 1, name: 'User 1' , username:'user name', email:'user@mail.com'}, { id: 2, name: 'User 2' , username:'user name', email:'user@mail.com'}];

    service.getAllUsers().subscribe((users: IUser[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should get posts by user id', () => {
    const userId = 1;
    const mockPosts: IPost[] = [{ id: 1, userId: 1, title: 'Post 1', body: 'body' }, { id: 2, userId: 1, title: 'Post 2', body: 'body' }];

    service.getPostsByUserId(userId).subscribe((posts: IPost[]) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });

    const req = httpMock.expectOne(`posts?userId=${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });

  it('should get comments by post id', () => {
    const postId = 1;
    const mockComments: IComment[] = [{ id: 1, postId: 1, name: 'Comment 1' , body: 'body'}, { id: 2, postId: 1, name: 'Comment 2' , body: 'body'}];

    service.getCommentsByPostId(postId).subscribe((comments: IComment[]) => {
      expect(comments.length).toBe(2);
      expect(comments).toEqual(mockComments);
    });

    const req = httpMock.expectOne(`comments?postId=${postId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockComments);
  });

});
