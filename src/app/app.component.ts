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
  str = "NIP=12345&CURP=SUGS881209HDFNNM92&NombreCompleto=Naranja Vale Suarez Galvan&Engine_InstanceId=7047509%-1B58-4432-A184-FE29088ED6BA";
  
  encq = window.btoa(this.str);

  res = "Encoded String: " + this.encq;

  

  
  ngOnInit(): void{
    this.route.navigate(['/terminos-y-condiciones',this.encq]);  }
}
