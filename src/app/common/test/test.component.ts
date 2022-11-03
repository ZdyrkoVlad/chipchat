import { Component, OnInit } from '@angular/core';
import { Message } from '../../dao/message';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // MessageList: Message[] = [
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate:  new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate:  new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate:  new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate:  new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate:  new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     text: 'Some hello'
  //   },
  //   {
  //     id: '1',
  //     authorId: '1',
  //     createDate: new Date(),
  //     messageText: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem \n' +
  //       '    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. \n' +
  //       '    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit \n' +
  //       '    lobortis nisl ut aliquip ex ea commodo consequat.'
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
