import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Quiz, QuizPost } from '../models/interfaces.model';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private listQuizes: Quiz[]
  private listQuizes$: Subject<Quiz[]>;

  constructor(private http: HttpClient) { 
    this.listQuizes = [];
    this.listQuizes$ = new Subject();
  }

  public getQuizes(url: string){
    return this.http.get<Quiz[]>(url);
  }

  public getQuiz(url: string){
    return this.http.get<Quiz>(url);
  }

  public createQuiz(url: string, body: QuizPost, token: string){
    const opciones = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.post(url,body,opciones);
  }

  public cambiarListQuizes(Quizes: Quiz[]){
    this.listQuizes = Quizes;
    this.listQuizes$.next(this.listQuizes);
  }

  public deleteQuiz(url: string, token: string){
    const opciones = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
    };
    return this.http.delete(url,opciones);
  }

  public getQuizes$(): Observable<Quiz[]>{
    return this.listQuizes$.asObservable();
  }
}
