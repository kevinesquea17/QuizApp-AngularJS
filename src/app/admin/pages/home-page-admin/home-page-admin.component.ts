import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/interfaces.model';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-admin',
  templateUrl: './home-page-admin.component.html',
  styleUrls: ['./home-page-admin.component.css']
})
export class HomePageAdminComponent implements OnInit {

  listQuizes: Quiz[]
  modal: boolean
  quizId: string;

  constructor(private QuizService: QuizService, private router: Router) {
    this.listQuizes = []
    this.modal = false;
    this.quizId = '';
  }

  ngOnInit(): void {
    this.QuizService.getQuizes('https://quizapp-api-nodejs-production.up.railway.app/api/quiz').subscribe(res => {
      this.listQuizes = res;
      console.log(res)
    })
    this.getQuizes();
  }

  showModal(id: string){
    this.quizId = id;
    this.modal = true;
  }

  cancelar(){
    this.quizId = '';
    this.modal = false;
  }

  deleteQuiz(){
    const token: string = localStorage.getItem('token')!
    this.QuizService.deleteQuiz(`http://localhost:3000/api/quiz/${this.quizId}`, token).subscribe(res => {
      this.listQuizes = this.listQuizes.filter(quiz => quiz._id != this.quizId)
      this.QuizService.cambiarListQuizes(this.listQuizes)
      this.modal = false;
      this.quizId = '';
    })
  }

  getQuizes(){
    this.QuizService.getQuizes$().subscribe(res => {
      this.listQuizes = res;
    })
  }

}
