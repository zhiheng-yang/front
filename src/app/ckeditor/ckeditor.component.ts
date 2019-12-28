import { Component, OnInit, ViewChild} from '@angular/core';
import {Mailbox} from '../entity';
import {MailBoxService} from '../mailBox.service';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  mailbox: Mailbox;
  log = '';
  // @ts-ignore
  @ViewChild('myckeditor') ckeditor: any;

  constructor(private mailService: MailBoxService) {
    this.mycontent = '<p>把你想说的话写给校长</p>';
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea'
    };
  }

  onChange($event: any): void {
    console.log('onChange');
    // this.log += new Date() + "<br />";
  }

  toBox(): void {
    // @ts-ignore
    this.mailbox = { sender: window.localStorage.getItem('name').toString(), mailContent: this.mycontent.trim()};
    this.mailService.addMail(this.mailbox).subscribe(res => alert(res.message));
  }

  // addMail(mailbox: Mailbox) {
  //   this.mailService.add.subscribe( res => this.college = res);
  // }

}
