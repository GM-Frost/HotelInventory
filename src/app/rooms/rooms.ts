export interface IRoom {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface IRoomList {
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkIn: Date;
  checkOut: Date;
}
