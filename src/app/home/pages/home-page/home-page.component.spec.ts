import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

import { StoreService } from 'src/app/core/store/store.service';
import { HomePageComponent } from './home-page.component';
import { UsersComponent } from '../../components/users-navbar/users.component';
import { PostListComponent } from '../../components/post-list/post-list.component';
import { PostSkeltonLoaderComponent } from '../../components/post-list/post-card/post-skelton-loader/post-skelton-loader.component';
import { SkeltonLoaderComponent } from 'src/app/shared/components/skelton-loader/skelton-loader.component';
import { By } from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let storeServiceSpy: jasmine.SpyObj<StoreService>;
  let activatedRouteStub: Partial<ActivatedRoute>;

  beforeEach(async () => {
    const storeSpy = jasmine.createSpyObj('StoreService', ['init']);
    const queryParamSubject = new BehaviorSubject<{ userId: number }>({
      userId: 1,
    });
    activatedRouteStub = {
      queryParams: queryParamSubject.asObservable(),
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        HomePageComponent,
        UsersComponent,
        PostListComponent,
        PostSkeltonLoaderComponent,
        SkeltonLoaderComponent,
      ],
      providers: [
        { provide: StoreService, useValue: storeSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    storeServiceSpy = TestBed.inject(
      StoreService
    ) as jasmine.SpyObj<StoreService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render post list based on query parameter', () => {
    const queryParam = { userId: 1 };
    activatedRouteStub.queryParams = of(queryParam);

    fixture.detectChanges();

    const postListElement = fixture.debugElement.query(By.css('app-post-list'));
    expect(postListElement).toBeTruthy();
  });

  it('should initialize store on init', () => {
    fixture.detectChanges();
    expect(storeServiceSpy.init).toHaveBeenCalled();
  });


});
