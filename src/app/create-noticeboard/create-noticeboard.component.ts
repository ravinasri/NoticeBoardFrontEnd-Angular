import { Component, OnInit } from '@angular/core';

import { NoticeBoardService } from '../services/noticeboard.service';
import { Router } from '@angular/router';
import { Noticeboard } from 'src/app/noticeboard';

@Component({
  selector: 'app-create-noticeboard',
  templateUrl: './create-noticeboard.component.html',
  styleUrls: ['./create-noticeboard.component.css']
})
export class CreateNoticeboardComponent implements OnInit {
  notice: Noticeboard = new Noticeboard();
  submitted = false;

  constructor(private noticeboardService: NoticeBoardService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.notice = new Noticeboard();
  }

  save() {
    
    this.noticeboardService.createEmployee(this.notice)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notice = new Noticeboard();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['notice']);
  }
}