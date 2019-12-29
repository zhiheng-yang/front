import { Component, OnInit } from '@angular/core';
import {MailBoxService} from '../mailBox.service';
import {Mailbox} from '../entity';
declare var $: any;

@Component({
  selector: 'app-headmaster-mailbox',
  templateUrl: './headmaster-mailbox.component.html',
  styleUrls: ['./headmaster-mailbox.component.css']
})
export class HeadmasterMailboxComponent implements OnInit {
  mails: Mailbox[];
  firstMail: Mailbox;

  constructor(private mailBoxService: MailBoxService) { }

  ngOnInit() {
    this.getMail();
  }

  getMail() {
    this.mailBoxService.getMail().subscribe(res =>  {this.mails = res
      // this.firstMail = this.mails[0], console.log(this.firstMail);
    });
  }

  change() {
    // $('sp').html('<blockquote> <p style="text-align: justify;">把你想说的话写给校长</p> </blockquote>');
  }

}
