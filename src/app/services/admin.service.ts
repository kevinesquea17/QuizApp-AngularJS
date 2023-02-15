import { Injectable } from '@angular/core';
import { Admin } from '../models/interfaces.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private admin: Admin;
  private admin$: Subject<Admin>

  constructor(private http: HttpClient) { 
    this.admin = {
      _id: '',
      name: '',
      email: '',
      token: ''
    }
    this.admin$ = new Subject();
  }

  public getAdmin(): Admin{
    return this.admin;
  }

  public login(url: string, body: {email: string, password: string}){
    return this.http.post<Admin>(url, body)
  }

  public cambiarUsuario(admin: Admin){
    this.admin = admin;
    this.admin$.next(this.admin);
  }

  getAdmin$(): Observable<Admin>{
    return this.admin$.asObservable();
  }
}
