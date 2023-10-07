import { Component, OnInit } from '@angular/core';
import { IRoom, IRoomList } from './rooms';

@Component({
  selector: 'BetterInn-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})

//INTERPOLATION
export class RoomsComponent implements OnInit {
  hotelName = 'Better-Inn';
  numberOfRooms = 10;
  roomList: IRoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom, Kitchen',
        price: 1400,
        photos:
          'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkIn: new Date('11-Nov-2023'),
        checkOut: new Date('12-Nov-2023'),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Regular Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom',
        price: 300,
        photos:
          'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkIn: new Date('11-Nov-2023'),
        checkOut: new Date('12-Nov-2023'),
        rating: 3.5,
      },
      {
        roomNumber: 3,
        roomType: 'Suit Room',
        amenities: 'Air Condition, Free Wifi, TV, Bathroom',
        price: 1500,
        photos:
          'https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        checkIn: new Date('11-Nov-2023'),
        checkOut: new Date('12-Nov-2023'),
        rating: 5.0,
      },
    ];
  }

  //Toggle Function
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  //ROOMS PROPERTIES
  rooms: IRoom = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
}
