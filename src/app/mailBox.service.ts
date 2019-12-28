import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  Response,
   Mailbox,
} from './entity';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MailBoxService {
  response: Response;
  private mailBoxUrl = 'http://localhost:8080/mail.ctl';

  constructor(private http: HttpClient) { }

  getMail(): Observable<Mailbox[]> {
    return this.http.get<Mailbox[]>(this.mailBoxUrl).pipe();
  }

  addMail(mailbox: Mailbox): Observable<Response> {
    console.log('传送');
    return this.http.post<Response>(this.mailBoxUrl, mailbox, httpOptions).pipe();
  }

  /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

