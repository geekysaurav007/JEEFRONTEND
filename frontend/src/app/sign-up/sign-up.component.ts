import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { UserService } from '../services/user.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private Router: Router, private userservice: UserService) {}
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });
  signUp(data: any) {
    console.warn(data);
    this.userservice.singnUp(data).subscribe(
      (res: any) => {
        console.warn(res);
        if (res.flag) { 
          alert(`sign_up successfull`)
          this.signUpForm.reset()
          this.Router.navigate(['/login']);
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
  signIn() {
    this.Router.navigate(['/login']);
  }
}
