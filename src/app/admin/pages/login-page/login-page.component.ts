import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Admin } from 'src/app/models/interfaces.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  alert: string;
  admin: Admin;

  constructor(private AdminService: AdminService, private router: Router) { 
    this.email = '';
    this.password = '';
    this.alert = '';
    this.admin = {
      _id: '',
      name: '',
      email: '',
      token: ''
    }
  }

  ngOnInit(): void {
  }

  login(){
    if([this.email, this.password].includes('')){
      this.alert = 'Todos los campos son obligarotios';
      return;
    }

    this.AdminService.login('http://localhost:3000/api/admin/login', {email: this.email, password: this.password}).subscribe(res => {
      this.admin = res;
      this.AdminService.cambiarUsuario(this.admin);
      localStorage.setItem('token', this.admin.token);
      localStorage.setItem('user', JSON.stringify(this.admin));
      this.router.navigate(['admin'])
    })
  }

}
