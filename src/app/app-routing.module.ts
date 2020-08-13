import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import {NoticeboardComponent} from 'src/app/noticeboard/noticeboard.component'
import { CreateNoticeboardComponent } from './create-noticeboard/create-noticeboard.component';
import { UpdateNoticeboardComponent } from './update-noticeboard/update-noticeboard.component';
import { NoticeboardDetailsComponent } from './noticeboard-details/noticeboard-details.component';

const routes: Routes = [
  // { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
 { path: 'notice', component: NoticeboardComponent },
 { path: '', redirectTo: 'notice', pathMatch: 'full' },
  { path: 'employees', component: NoticeboardDetailsComponent },
  { path: 'add', component: CreateNoticeboardComponent },
  { path: 'update/:id', component: UpdateNoticeboardComponent },
  { path: 'details/:id', component: NoticeboardDetailsComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
