import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  companyUrl = "http://localhost:3000/company"
  employeeUrl = "http://localhost:3000/employee"

  constructor(private http: HttpClient ) { }

  getCompany(){
    return this.http.get(this.companyUrl)
  }

  getEmployee(){
    return this.http.get(this.employeeUrl)
  }

  addCompany(data:any){
    return this.http.post(this.companyUrl, data)
  }

  addEmployee(data:any){
    return this.http.post(this.employeeUrl, data)
  }

  deleteCompany(id:any){
    return this.http.delete(this.companyUrl+'/'+id)
  }

  deleteEmployee(id:any){
    return this.http.delete(this.employeeUrl+'/'+id)
  }

  updateCompany(id:any, data:any){
    return this.http.put(this.companyUrl+'/'+id, data)
  }

  updateEmployee(id:any, data:any){
    return this.http.put(this.employeeUrl+'/'+id, data)
  }
}
