import { Component, OnInit } from '@angular/core';
import { NoticeBoardService } from '../services/noticeboard.service';
import { Noticeboard } from 'src/app/noticeboard';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {

  Noticeboard: Observable<Noticeboard[]>;
  notice: Noticeboard = new Noticeboard();
  submitted = false;
  // value = '';
  // onEnter(value: string)
  //  {
  //   this.value = value;
  // }
  // public show: boolean = false;
  // public buttonName: any = 'Show';
  notices: any;

  constructor(private noticeboardService: NoticeBoardService, private actRoute: ActivatedRoute, private router: Router) {
    // var id = this.actRoute.snapshot.paramMap.get(id);
    // this.noticeboardService.get(id).subscribe((data) => {
    // alert(console.log(id));
    //   })
  }

  ngOnInit() {
    this.noticeboard();

  }
  noticeboard() {
    this.noticeboardService.getList()
      .subscribe(
        data => {
          this.notices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  newNoticeboard(): void {
    this.submitted = false;
    this.notice = new Noticeboard();
  }

  updateEmployee(id: number) {
    this.noticeboardService.updatee(id,'')
      .subscribe(data => {
        console.log(data);
      this.noticeboard();}, error => console.log(error));
    this.notice = new Noticeboard();
    
  }

  deleteEmployee(id: number) {
    this.noticeboardService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.noticeboard();
        },
        error => console.log(error));
  }
  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updatee(id: number) {
    this.router.navigate(['update', id]);
  }
  // toggle() {
  //   this.show = !this.show;

  //   // CHANGE THE NAME OF THE BUTTON.
  //   if (this.show)
  //     this.buttonName = "Hide";

  //   else
  //     this.buttonName = "Show";
  // }


}



















