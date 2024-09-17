import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-merit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  providers: [NgIf],
  templateUrl: './create-merit.component.html',
  styleUrl: './create-merit.component.css',
})
export class CreateMeritComponent {
  mymerit:any=[];
  constructor(private Router: Router, private userservice: UserService) {}
  meritForm = new FormGroup({
    physics: new FormControl('', Validators.required),
    chemistry: new FormControl('', Validators.required),
    maths: new FormControl('', [Validators.required]),
    roll_no: new FormControl('', Validators.required),
  });
  createMerit(data:any){
    console.warn(data);
    this.userservice.createMerit(data).subscribe((res:any)=>{
      console.warn(`from create merit-`,res)
      if(res.flag){
        
        this.Router.navigate(['/alldata']);
      }else{
        alert(`${res.message}`)
      }
      
    },(err)=>{
      console.warn(err)
      alert(`you have error => ${err}`)
    })
  }
}
