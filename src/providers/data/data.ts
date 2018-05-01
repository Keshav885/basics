import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  constructor(private http :Http) { }

  getCategories() {
    return this.http.get('http://ec2-54-237-150-50.compute-1.amazonaws.com:8080/app1/getCategories').
    map(res => res.json());;
  }

  getWaitTimeForCustomers() {
    return this.http.get('http://ec2-54-237-150-50.compute-1.amazonaws.com:8080/app1/notStartTickets')
  }

  getWaitTime() {
    return this.http.get('http://ec2-54-237-150-50.compute-1.amazonaws.com:8080/app1/potentialWaitTime')
  }

  createTicket(obj) {
    return this.http.post('http://ec2-54-237-150-50.compute-1.amazonaws.com:8080/app1/createTicket', obj).
    map(res => res.json());
  }

  clearTicket(obj){
    return this.http.put(`http://ec2-54-237-150-50.compute-1.amazonaws.com:8080/app1/clearTicket/`, obj)
  }



}
