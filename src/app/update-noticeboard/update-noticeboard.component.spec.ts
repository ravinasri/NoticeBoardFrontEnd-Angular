import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoticeboardComponent } from './update-noticeboard.component';

describe('UpdateNoticeboardComponent', () => {
  let component: UpdateNoticeboardComponent;
  let fixture: ComponentFixture<UpdateNoticeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNoticeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
