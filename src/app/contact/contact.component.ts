import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { ContactMessage, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title: 'Contact Me';
  message: ContactMessage = {};

  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
  }

  sendEmail(message: ContactMessage) {
    this.contactService.sendEmail(message).subscribe(res => {
      console.log('Contact Sent Success', res);
    }, error => {
      console.log('Contact Error', error);
    });
  }
}
