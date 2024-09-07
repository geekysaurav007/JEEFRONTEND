import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUser: any;
  public isAdmin: any;
  public isLoogedIn: any;
  public myCart: any = [];
  constructor(private http: HttpClient, private router: Router) {}
  loginService(data: any) {
    console.warn(data);
    this.http
      .post('https://jeeresult.onrender.com/api/users/login', data)
      .subscribe(
        (resp: any) => {
          console.warn(JSON.parse(JSON.stringify(resp.token)));
          localStorage.setItem('token', resp.token);
          localStorage.setItem('iSLogin', 'yes');
          this.router.navigate(['/alldata']);
        },
        (err) => {
          alert(`err.message ${err.error.message}`);
        }
      );
  }
  getAllMerit() {
    
    return this.http.get(`https://jeeresult.onrender.com/api/merit/allmerit`);
  }
  getMyMarks(roll: any) {
    return this.http.get(`https://jeeresult.onrender.com/api/merit/mymerit/${roll.roll}`)
  }
}
