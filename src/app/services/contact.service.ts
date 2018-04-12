import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ContactMessage {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

@Injectable()
export class ContactService {
  private emailUrl = '/assets/email.php';

  constructor(private http: Http) {

  }

  sendEmail(message: ContactMessage): Observable<ContactMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }
}
