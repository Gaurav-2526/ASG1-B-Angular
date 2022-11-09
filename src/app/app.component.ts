import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : User[] = [];
  constructor(private apiService : ApiService){}
  getUsers(){
       this.apiService.getUsers().subscribe(
        users => this.users = users
       );
  }

}
