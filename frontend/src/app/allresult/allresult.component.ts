import { Component, OnInit } from '@angular/core';

import { RouterOutlet, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-allresult',
  standalone: true,
  imports: [NgFor],
  templateUrl: './allresult.component.html',
  styleUrl: './allresult.component.css'
})
export class AllresultComponent implements OnInit {
  data:any
  constructor(private userservice:UserService){}
  ngOnInit(): void {
   this.userservice.getAllMerit().subscribe((res)=>{
    this.data=res
   })
  }
  
}
