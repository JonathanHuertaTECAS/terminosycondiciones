import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public error = false
  public casillaMarcada = false
  idInstance =''
  
  
  constructor(private infoService: InformacionDispositivoService, 
              private route:ActivatedRoute) { }
  

  
 async ngOnInit() {
    this.getIP();
    this.infoService.consultIdInstance('OPB3340').subscribe((res: any) =>{
      console.log(res)
    })
    let parametroHash = this.route.snapshot.params['dta'];
    try {
      let decodifica = window.atob(parametroHash);
      let arregloParametros = decodifica.split('&');
    for(let  i = 0 ; i < arregloParametros.length; i++){
      let arregloLimpio = arregloParametros[i].split('=');
      arregloParametros[i]=arregloLimpio[1]
    }
    this.nip = arregloParametros[0]
    this.CURP = arregloParametros[1]
    this.nombreCliente = arregloParametros[2]
    this.idInstance = arregloParametros[3]
    console.log(arregloParametros)
    await this.valInfo();
  } catch(e) {
    alert('Hubo un problema con la información')
    console.log(e)
    this.visible = false
    window.location.href = 'https://www.came.org.mx/'
  }
    
  }
  async valInfo(){
    let pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
    let numberPattern = /^[0-9]+$/
    if(this.nip.length == 5 && this.nip.match(numberPattern) && this.idInstance.match(pattern) ){
      this.visible = true
    }  
    else{
      alert('Hubo un problema con la información')
      this.visible = false
      window.location.href = 'https://www.came.org.mx/'
    }
    
  }
  getIP(){
    this.infoService.getIpAddress().subscribe((res:any)=>{  
      this.ipDireccion=res.ip;
      console.log(this.ipDireccion,navigator)
    });  
  }
  onChecked(){
    if(this.casillaMarcada){
      this.casillaMarcada = false;
    }
    else
    {
      this.casillaMarcada = true
    }
  }
  Submit(){
    console.log(this.casillaMarcada)
    if(this.casillaMarcada){
      const dia = new Date(Date.now()).toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });;
      const diaS = new Date(Date.now()).toLocaleString('en-MX', { timeZone: 'America/Mexico_City' });;
      console.log(diaS, dia)
      let fecha = diaS; /* ('0' + dia.getDate()).slice(-2) + '-' + ('0' + (dia.getMonth() + 1)).slice(-2) + '-' + dia.getFullYear() + ' ' + dia.getHours() + ':' + dia.getMinutes() + ':' + dia.getSeconds() ; */
      console.log(fecha)
      this.terminosAceptados = true
      this.visible = false
      console.log(this.terminosAceptados)
    }
    else{
      this.error = true;

    }
  }

}
