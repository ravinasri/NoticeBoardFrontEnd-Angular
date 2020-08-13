import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoticeboardComponent } from './create-noticeboard.component';

describe('CreateNoticeboardComponent', () => {
  let component: CreateNoticeboardComponent;
  let fixture: ComponentFixture<CreateNoticeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNoticeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
