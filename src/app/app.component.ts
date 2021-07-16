import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route: Router) { }
  title = 'terminosycondiciones';
  str = "NIP=12345&CURP=SUGS881209HDFNNM92&NombreCompleto=Naranja Vale Suarez Galvan&Engine_InstanceId=1e601ec7-fb00-4deb-a8bb-d9da5147d878";
  
  encq = window.btoa(this.str);

  res = "Encoded String: " + this.encq;

  

  
  ngOnInit(): void{
    console.log(this.encq)
  }
}
