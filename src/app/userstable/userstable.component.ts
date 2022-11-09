import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {

  constructor() { }
  @Input() users: User[] = [];
  
  ngOnInit(): void {

  }
  

}
