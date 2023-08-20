import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSkeltonLoaderComponent } from './comment-skelton-loader.component';

describe('CommentSkeltonLoaderComponent', () => {
  let component: CommentSkeltonLoaderComponent;
  let fixture: ComponentFixture<CommentSkeltonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentSkeltonLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentSkeltonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
