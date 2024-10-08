import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  loginflag = true;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    console.warn("helooooo")
    this.getAllMerit()
    if (localStorage.getItem('iSLogin') == 'yes') {
      this.loginflag = false;
    }
  }

  Login(data: any) {
    this.loginflag = false;
    this.userService.loginService(data);
  }
 
  getAllMerit(){
    this.userService.getAllMerit();
  }
  SignOut(){
    localStorage.clear()
    this.router.navigate(["/login"])
  }
}
