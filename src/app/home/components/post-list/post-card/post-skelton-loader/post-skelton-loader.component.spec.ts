import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSkeltonLoaderComponent } from './post-skelton-loader.component';

describe('PostSkeltonLoaderComponent', () => {
  let component: PostSkeltonLoaderComponent;
  let fixture: ComponentFixture<PostSkeltonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSkeltonLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSkeltonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
