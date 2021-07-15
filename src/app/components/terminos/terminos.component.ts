import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionDispositivoService } from 'src/app/services/informacion-dispositivo.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit {

  public terminosAceptados = false;
  public visible = true;
  public ipDireccion = '';
  public nip = '';
  public nombreCliente = '';
  public CURP = '';
  constructor(private ip: InformacionDispositivoService, private route:ActivatedRoute) { }
  

  
  ngOnInit(): void {
    this.getIP();
    let parametroHash = this.route.snapshot.params['dta'];
    let decodifica = window.atob(parametroHash);
    let arregloParametros = decodifica.split('&');
    for(let  i = 0 ; i < arregloParametros.length; i++){
      let arregloLimpio = arregloParametros[i].split('=');
      arregloParametros[i]=arregloLimpio[1]
    }
    this.nip = arregloParametros[0]
    this.CURP = arregloParametros[1]
    this.nombreCliente = arregloParametros[2]

  
  }
  getIP(){
    this.ip.getIpAddress().subscribe((res:any)=>{  
      this.ipDireccion=res.ip;
      console.log(this.ipDireccion,navigator)
    });  
  }
  onChecked(){
    const dia = new Date();
    let fecha = dia; /* ('0' + dia.getDate()).slice(-2) + '-' + ('0' + (dia.getMonth() + 1)).slice(-2) + '-' + dia.getFullYear() + ' ' + dia.getHours() + ':' + dia.getMinutes() + ':' + dia.getSeconds() ; */
    console.log(fecha)
    this.terminosAceptados = true
    this.visible = false
  }

}
