import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InformacionDispositivoService {

  constructor( private http: HttpClient) { }
  
  getIpAddress(){
    return this.http.get("http://api.ipify.org/?format=json")
  }
  consultIdInstance (x:string){
    
    return this.http.get("https://192.168.101.182:6001/ServicioBancos/api/Bancos/ObtenerPorCodigo?codigo="+x)
    
  }
}
