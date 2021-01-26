import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

// Create
createBooking(apt: Appointment) {
  return this.bookingListRef.push({
    
    nombreCompleto: apt.nombreCompleto,
    direccion : apt.direccion,
    nivelEducativo : apt.nivelEducativo,
    escuela : apt.escuela,
    telefono: apt.telefono,
    correoElectronico : apt.correoElectronico,
    Instagram : apt.Instagram,
    Facebook : apt.Facebook,

    pregunta1 : apt.pregunta1,
    pregunta2 : apt.pregunta2,
    pregunta3 : apt.pregunta3,
    pregunta4 : apt.pregunta4,
    pregunta5 : apt.pregunta5,
    pregunta6 : apt.pregunta6,
    pregunta7 : apt.pregunta7,
    pregunta8 : apt.pregunta8,
    pregunta9 : apt.pregunta9,
    pregunta10 : apt.pregunta10

  })
}

// Get Single
getBooking(id: string) {
  this.bookingRef = this.db.object('/appointment/' + id);
  return this.bookingRef;
}

// Get List
getBookingList() {
  this.bookingListRef = this.db.list('/appointment');
  return this.bookingListRef;
}

// Update
updateBooking(id, apt: Appointment) {
  return this.bookingRef.update({
    nombreCompleto: apt.nombreCompleto,
    direccion : apt.direccion,
    nivelEducativo : apt.nivelEducativo,
    escuela : apt.escuela,
    telefono: apt.telefono,
    correoElectronico : apt.correoElectronico,
    Instagram : apt.Instagram,
    Facebook : apt.Facebook,

    pregunta1 : apt.pregunta1,
    pregunta2 : apt.pregunta2,
    pregunta3 : apt.pregunta3,
    pregunta4 : apt.pregunta4,
    pregunta5 : apt.pregunta5,
    pregunta6 : apt.pregunta6,
    pregunta7 : apt.pregunta7,
    pregunta8 : apt.pregunta8,
    pregunta9 : apt.pregunta9,
    pregunta10 : apt.pregunta10
  })
}

// Delete
deleteBooking(id: string) {
  this.bookingRef = this.db.object('/appointment/' + id);
  this.bookingRef.remove();
}


}
