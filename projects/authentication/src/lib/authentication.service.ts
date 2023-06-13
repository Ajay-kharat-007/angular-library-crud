import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.apiUrl)
  }

  addUser(data: any) {
    return this.http.post(this.apiUrl, data)
  }

  getUserById(id: any) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  deleteUser(id: any) {
    return this.http.delete(this.apiUrl + '/' + id)
  }

  updateUser(id: any, data: any) {
    return this.http.put(this.apiUrl + '/' + id, data)
  }
}
