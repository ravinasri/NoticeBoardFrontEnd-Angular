import { Component, OnInit } from '@angular/core';
import { Noticeboard } from 'src/app/noticeboard';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeBoardService } from '../services/noticeboard.service';

@Component({
  selector: 'app-update-noticeboard',
  templateUrl: './update-noticeboard.component.html',
  styleUrls: ['./update-noticeboard.component.css']
})
export class UpdateNoticeboardComponent implements OnInit {

  id: number;
  notice: Noticeboard;

  constructor(private route: ActivatedRoute,private router: Router,
    private noticeboardService: NoticeBoardService) { }

  ngOnInit() {
    this.notice = new Noticeboard();

    this.id = this.route.snapshot.params['id'];
    
    this.noticeboardService.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.notice = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.noticeboardService.updatee(this.id,this.notice)
      .subscribe(data => console.log(data), error => console.log(error));
    this.notice = new Noticeboard();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/notice']);
  }
}
