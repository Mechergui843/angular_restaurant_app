import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients:IClient []=[
    {id:1,nom:'mohamed tounsi',
    email:'mohamed.tounsi@gmail.com',
    password:'mohamed1',
    tel:'22222222'},

    {id:2,nom:'maha ben azzouz',
    email:'maha.benazzouz@gmail.com',
    password:'maha122222',
    tel:'23222222'}
  ];
  constructor() { }
  getClients=()=>{
    return [...this.clients];//retourne une copie de tableau original c pas une reference
  }

  getClientById=(id:number)=>{
    return this.clients.find(client=>client.id===id);
  }
  getLastId=()=>{
    return this.clients[this.clients.length-1].id;
  }

  addClient=(client:IClient)=>{
    this.clients=[...this.clients,client];
  }

  //edit

  //delete
}
