
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticeboard } from 'src/app/noticeboard';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const baseUrl = 'https://jhipsternoticeboard.herokuapp.com/api/notices';

@Injectable({
  providedIn: 'root'
})
export class NoticeBoardService {


  constructor(private http: HttpClient) { }


  getList(): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzM4NTkxMX0.u_jiD3kFafkwD3ApL8WUS60gfWYSkBUS_hHfMT2gSklIggymSxwPTQeYxP0sIbGmPoEM_o4OBWHClyzM1tQrTg'
    });
    return this.http.get(baseUrl, { headers: reqHeader });
  }

 
  deleteEmployee(id: number): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzM4NTkxMX0.u_jiD3kFafkwD3ApL8WUS60gfWYSkBUS_hHfMT2gSklIggymSxwPTQeYxP0sIbGmPoEM_o4OBWHClyzM1tQrTg'
    });
    return this.http.delete(`${baseUrl}/${id}`, { headers: reqHeader });
  }

  get(id: number): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzM4NTkxMX0.u_jiD3kFafkwD3ApL8WUS60gfWYSkBUS_hHfMT2gSklIggymSxwPTQeYxP0sIbGmPoEM_o4OBWHClyzM1tQrTg'
    });
    return this.http.get(`${baseUrl}/${id}`, { headers: reqHeader });
  }

  // update(noticeboard: Noticeboard): Observable<any> {
  //   var body = JSON.stringify(noticeboard);
  //   var reqHeader = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': ' Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzMzMDY3N30.KZniESYGYBabcrrACbNbxu9l-7FftYqezqWrk2Kui9GSvwkkt9ICJnNwJXXEeubl6PT8GgntvL0RuW8Eb8mGLQ'
  //   });
  //   return this.http.put(`https://ravina-noticeboardapp.herokuapp.com/api/notices/`, body, { headers: reqHeader });

  // }


  createEmployee(notice: Object): Observable<any> 
  {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzM4NTkxMX0.u_jiD3kFafkwD3ApL8WUS60gfWYSkBUS_hHfMT2gSklIggymSxwPTQeYxP0sIbGmPoEM_o4OBWHClyzM1tQrTg'
  });
  
  return this.http.post(baseUrl,notice, { headers: reqHeader });
  }

  updatee(id: number, value: any): Observable<any> 
  {
  var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU5NzM4NTkxMX0.u_jiD3kFafkwD3ApL8WUS60gfWYSkBUS_hHfMT2gSklIggymSxwPTQeYxP0sIbGmPoEM_o4OBWHClyzM1tQrTg'
  });
  
  return this.http.put('https://jhipsternoticeboard.herokuapp.com/api/notices/',value, { headers: reqHeader });
  }


}




// getEmployee(id: number): Observable<any> {
//   return this.http.get(`${this.baseUrl}/${id}`);
// }

// createEmployee(employee: Object): Observable<Object> {
//   return this.http.post(`${this.baseUrl}`, employee);
// }

// updateEmployee(id: number, value: any): Observable<Object> {
//   return this.http.put(`${this.baseUrl}/${id}`, value);
// }


