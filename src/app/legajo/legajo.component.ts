import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent implements OnInit {

  fecha: any
  hoy: any
  pipe: any
  fila:any

  constructor(){

  }

  ngOnInit(): void {

    this.hoy = new Date
    this.pipe = new DatePipe('en-US')
    let ChangedFormat = this.pipe.transform(this.hoy, 'dd/MM/YYYY');
    this.fecha = ChangedFormat;

    $('#aumentar').click(function() {
      $('#tabla>tbody').append('<tr><th scope="row">1</th><td><select class="form-control form-select-sm" aria-label="Small select example"><option selected>Tipo de Documento</option><option value="1">Resolucion</option><option value="2">Titulo</option><option value="3">Diplomas</option><option value="4">Maestria</option></select></td><td><div class="d-flex justify-content-between"><input class="form-control file" id="formFileLg" type="file">  <button type="button" class="btn btn-warning"><i class="fa-solid fa-trash"></i></button></div></td></tr>');
    });



  }



}
