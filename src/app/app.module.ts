import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './user/pages/home-page/home-page.component';
import { QuizItemComponent } from './shared/quiz-item/quiz-item.component';
import { DetailQuizComponent } from './user/pages/detail-quiz/detail-quiz.component';
import { QuestionComponent } from './user/components/question/question.component';
import { CardComponent } from './shared/card/card.component';
import { LoginPageComponent } from './admin/pages/login-page/login-page.component';
import { HomePageAdminComponent } from './admin/pages/home-page-admin/home-page-admin.component';
import { HeaderComponent } from './admin/components/header/header.component';
import {CreateQuizComponent} from './admin/pages/create-quiz/create-quiz.component'





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuizItemComponent,
    DetailQuizComponent,
    QuestionComponent,
    CardComponent,
    LoginPageComponent,
    HomePageAdminComponent,
    HeaderComponent,
    CreateQuizComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
