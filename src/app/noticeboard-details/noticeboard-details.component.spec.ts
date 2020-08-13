import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeboardDetailsComponent } from './noticeboard-details.component';

describe('NoticeboardDetailsComponent', () => {
  let component: NoticeboardDetailsComponent;
  let fixture: ComponentFixture<NoticeboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
