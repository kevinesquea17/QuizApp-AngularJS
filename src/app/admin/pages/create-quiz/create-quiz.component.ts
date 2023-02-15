import { Component, OnInit } from '@angular/core';
import { AnswerPost, QuestionPost, QuizPost } from '../../../models/interfaces.model';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
  showButtons: boolean;
  nameQuiz: string;
  question: string;
  answer: string
  alert: string
  answers: AnswerPost[]
  questions: QuestionPost[]
  quiz: QuizPost;

  

  constructor(private QuizService: QuizService, private router: Router) { 
    this.nameQuiz = '';
    this.question = '';
    this.answer = ''
    this.alert = ''
    this.step1 = true;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.showButtons = false
    this.answers = [];
    this.questions = []
    this.quiz = {
      name: '',
      questions: []
    }

  }

  ngOnInit(): void {
    
  }

  showStep2(){
    if(this.nameQuiz === ''){
      this.alert = 'Debes ingresar un nombre de Quiz.'
      return;
    }

    this.alert = ''
    this.step1 = false;
    this.step2 = true;
  }

  showStep3(){
    if(this.question === ''){
      this.alert = 'Debes ingresar una pregunta.'
      return;
    }

    this.alert = '';
    this.step2 = false;
    this.step3 = true;
  }

  createAnswer(){
    if(this.answer === ''){
      return;
    }

    switch(this.answers.length){
      case 0: 
        this.answers = [...this.answers, {answerItem: 'A', answerText: this.answer, answerCorrect: false}]
        this.answer = '';
        return
      case 1:
        this.answers = [...this.answers, {answerItem: 'B', answerText: this.answer, answerCorrect: false}]
        this.answer = '';
        return
      case 2:
        this.answers = [...this.answers, {answerItem: 'C', answerText: this.answer, answerCorrect: false}]
        this.answer = '';
        return
      case 3: 
        this.answers = [...this.answers, {answerItem: 'D', answerText: this.answer, answerCorrect: false}]
        this.answer = '';
        this.step3 = false;
        this.step4 = true;
        return
    }
  }

  marcarCorrecta(indice: number){
    this.answers = this.answers.map((answer, index) => {
      if(indice === index){
        return {...answer, answerCorrect: true}
      }else{
        return answer
      }
    })
    this.showButtons = true;
    this.questions = [...this.questions, {question: this.question, answers: this.answers}]
    this.quiz = {name: this.nameQuiz, questions: this.questions};
  }

  otherQuestion(){
    this.step4 = false;
    this.step2 = true;
    this.question = '';
    this.answers = [];
  }

  saveQuiz(){
    const token: string = localStorage.getItem('token')!
    this.QuizService.createQuiz('http://localhost:3000/api/quiz/create', this.quiz, token).subscribe(res => {
      console.log(res);
      setTimeout(() => {
        this.router.navigate(['admin'])
      }, 3000)
    })
  }

}