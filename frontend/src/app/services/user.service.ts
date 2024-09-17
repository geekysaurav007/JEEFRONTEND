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

          console.log(jwtDecode(resp.token));
          const decoded_res: any = jwtDecode(resp.token);
          if (decoded_res.isAdmin) {
            localStorage.setItem('token', resp.token);
            localStorage.setItem("roll_no",decoded_res.roll_no)
            localStorage.setItem('iSLogin', 'yes');
            localStorage.setItem('isAdmin', '1');
            this.router.navigate(['/createMerit']);
          }else{
            localStorage.setItem('token', resp.token);
            localStorage.setItem('isUser', '1');
            localStorage.setItem('iSLogin', 'yes');
            localStorage.setItem("roll_no",decoded_res.roll_no)
            this.router.navigate(['/alldata']);
          }
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
    return this.http.get(
      `https://jeeresult.onrender.com/api/merit/mymerit/${roll.roll}`
    );
  }
  singnUp(data: any) {
    return this.http.post(
      `https://jeeresult.onrender.com/api/users/signup`,
      data
    );
  }
  createMerit(data: any) {
    console.warn(data, data.roll_no);
    return this.http.post(
      `https://jeeresult.onrender.com/api/merit/create/${data.roll_no}`,
      data
    );
  }
}
