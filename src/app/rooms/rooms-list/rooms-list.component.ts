import { Component, Input, OnInit } from '@angular/core';
import { IRoomList } from '../rooms';

@Component({
  selector: 'BetterInn-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  //DECORATOR
  @Input() rooms: IRoomList[] = [];

  constructor() {}
  ngOnInit(): void {}
}
