import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpSService {

  constructor() { }

      getDataFromServer() {
         return fetch("https://randomuser.me/api/?results=10")
      }
}
