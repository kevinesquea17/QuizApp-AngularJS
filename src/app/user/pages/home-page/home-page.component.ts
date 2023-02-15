import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/interfaces.model';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listQuizes: Quiz[];

  constructor(private QuizService: QuizService, private router: Router) {
    this.listQuizes = [];
  }

  ngOnInit(): void {
    this.QuizService.getQuizes('https://quizapp-api-nodejs-production.up.railway.app/api/quiz').subscribe(res => {
      this.listQuizes = res
      console.log(this.listQuizes)
    })
  }

  mostrarQuiz(id: string){
    this.router.navigate([`/quiz/${id}`]);
  }

}
