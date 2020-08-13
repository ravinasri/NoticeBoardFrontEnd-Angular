import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { NoticeBoardService } from './services/noticeboard.service';
import { HttpClientModule } from '@angular/common/http';
 import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { CreateNoticeboardComponent } from './create-noticeboard/create-noticeboard.component';
import { UpdateNoticeboardComponent } from './update-noticeboard/update-noticeboard.component';
import { FormsModule } from '@angular/forms';
import { NoticeboardDetailsComponent } from './noticeboard-details/noticeboard-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NoticeboardComponent,
    CreateNoticeboardComponent,
    UpdateNoticeboardComponent,
    NoticeboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [NoticeBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
