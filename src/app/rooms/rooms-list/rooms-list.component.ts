import {
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IRoomList } from '../rooms';

@Component({
  selector: 'BetterInn-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges {
  //DECORATOR
  @Input() rooms: IRoomList[] = [];

  @Output() selectedRoom = new EventEmitter<IRoomList>();

  //implements interface
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method Not implemented');
  }
  constructor() {}
  ngOnInit(): void {}

  selectRoom(room: IRoomList) {
    this.selectedRoom.emit(room);
  }
}
