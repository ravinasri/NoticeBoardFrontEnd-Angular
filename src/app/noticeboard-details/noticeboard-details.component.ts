import { Component, OnInit } from '@angular/core';
import { Noticeboard } from 'src/app/noticeboard';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticeBoardService } from '../services/noticeboard.service';

@Component({
  selector: 'app-noticeboard-details',
  templateUrl: './noticeboard-details.component.html',
  styleUrls: ['./noticeboard-details.component.css']
})
export class NoticeboardDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['notice']);
  }
}
