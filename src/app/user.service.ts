import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  name: string;
  id: number;
  student: any;

  // DI
  constructor(private httpClient: HttpClient) { }

  // get, post, put, fetch, delete, patch

  getUsers(): Observable<any> {
    return this.httpClient.get(this.url);
    // Observable -> future
  }

  getUser() {
    // const : constant
    let user = {
      id: 101,
      name: 'Nitin'
    };
    return user;
  }
}
