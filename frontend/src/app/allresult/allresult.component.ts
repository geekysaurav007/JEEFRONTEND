import { Component, OnInit } from '@angular/core';

import { RouterOutlet, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-allresult',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet],
  templateUrl: './allresult.component.html',
  styleUrl: './allresult.component.css'
})
export class AllresultComponent implements OnInit {
  data:any
  myResult:any=[];
  tableFlag2=false;
  tableflag1=false;
  dataForm = new FormGroup({
    roll: new FormControl('', [Validators.required]),
    
  });
  constructor(private userservice:UserService){}
  ngOnInit(): void {
   this.userservice.getAllMerit().subscribe((res)=>{
    this.data=res
    console.warn(this.data)
   })
  }
  getMyResult(data:any){
    this.myResult=[];
    this.dataForm.reset()
    this.userservice.getMyMarks(data).subscribe((res)=>{
      console.log(res);
      this.myResult.push(res)
      this.tableFlag2=true
      this.tableflag1=true
    })
  }
  Clear(){
    this.myResult=null;
    this.tableFlag2=false;
  }
  
}
