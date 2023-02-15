import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Admin } from 'src/app/models/interfaces.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: Admin;

  constructor(private AdminService: AdminService, private router: Router) {
    this.admin = this.AdminService.getAdmin();
  }

  ngOnInit(): void {
    this.admin = JSON.parse(localStorage.getItem('user')!);
  }

  logout(){
    this.admin = {
      _id: '',
      name: '',
      email: '',
      token: ''
    };
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.AdminService.cambiarUsuario(this.admin)
    this.router.navigate(['admin/login'])
  }

}
