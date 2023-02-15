import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './user/pages/home-page/home-page.component';
import { DetailQuizComponent } from './user/pages/detail-quiz/detail-quiz.component';
import { LoginPageComponent } from './admin/pages/login-page/login-page.component';
import { HomePageAdminComponent } from './admin/pages/home-page-admin/home-page-admin.component';

import { AdminGuardGuard } from './admin-guard.guard';
import { CreateQuizComponent } from './admin/pages/create-quiz/create-quiz.component';




const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'quiz/:id', component: DetailQuizComponent},
  {path: 'admin/login', component: LoginPageComponent},
  {path: 'admin', component: HomePageAdminComponent, canActivate: [AdminGuardGuard]},
  {path: 'admin/create-quiz', component: CreateQuizComponent, canActivate: [AdminGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
