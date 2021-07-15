import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionDispositivoService {

  constructor( private http: HttpClient) { }

  getIpAddress(){
    return this.http.get("http://api.ipify.org/?format=json")
  }
}
