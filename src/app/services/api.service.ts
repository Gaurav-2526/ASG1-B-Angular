import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
