import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/app/models/interfaces.model';

@Component({
  selector: 'app-detail-quiz',
  templateUrl: './detail-quiz.component.html',
  styleUrls: ['./detail-quiz.component.css']
})
export class DetailQuizComponent implements OnInit {

  currentUrl: string
  quiz: Quiz
  startQuiz: boolean;
  questions: boolean;
  results: boolean;
  currentQuestion: number
  score: number
  username: string;
  alert: string

  constructor(private router: Router, private QuizService: QuizService) { 
    this.currentUrl = ''
    this.quiz = {
      name: '',
      questions: [],
      _id: '',
      __v: 0
    }
    this.startQuiz = true;
    this.questions = false;
    this.currentQuestion = 0;
    this.score = 0;
    this.results = false;
    this.username = ''
    this.alert = ''
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.QuizService.getQuiz(`http://localhost:3000/api${this.currentUrl}`).subscribe(res => {
      this.quiz = res
      console.log(res)
    })
  }

  showQuestions(){
    if(this.username == ''){
      this.alert = 'Debes ingresar un username.'
      return;
    }
    this.startQuiz = false;
    this.questions = true;
  }

  marcarAnswer(isCorrect: boolean){
    if(this.currentQuestion < this.quiz.questions.length -1 ){
      if(isCorrect){
        this.score = this.score + 10;
      }
      this.currentQuestion = this.currentQuestion + 1;
    }else{
      if(isCorrect){
        this.score = this.score + 10;
      }
      this.questions = false;
      this.results = true;
    }
  }

  restartQuiz(){
    this.score = 0;
    this.currentQuestion = 0;
    this.results = false;
    this.questions = true;
  }

  otherQuiz(){
    this.router.navigate([''])
  }

}
