import { Injectable } from '@angular/core';
import { HttpServicesService } from './http-services.service';
import { Empleado } from '../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  miUrl: string = "http://localhost:80/Comanda/empleado/" ;

  constructor( public miserviciohttp:HttpServicesService) { }

  public listarEmpleadosPromesa(): Promise<Array<Empleado>> {
    let promesa: Promise<Array<Empleado>> = new Promise((resolve, reject) =>
        {
          this.miserviciohttp.dameTodasLasPromesas(this.miUrl)        
              .then(datos=>{  console.log(datos);
                              let miArray: Array<Empleado> = new Array<Empleado>();
                              for (let unDato of datos) {
                                console.log(unDato.nombre);      
                                miArray.push(new Empleado(unDato.id, unDato.nombre, unDato.legajo, unDato.tipo, unDato.foto,unDato.clave));                        
                              }
                              resolve(miArray);
                            })
              .catch(error=>{console.log(error);});
        }
      );
     return promesa;
    }
  
  public borrarEmpleadoPromesa(idEmpleado:string): Promise<string> {
      
    let promesaBaja: Promise<string> = new Promise((resolve,reject) =>
      {
        this.miserviciohttp.teDoyUnaPromesaBaja(this.miUrl,idEmpleado)
                  .then(datos=>{ console.log("Datos Baja:",datos);
                                 resolve(idEmpleado);
                               } 
                        )
                   .catch(error=>{console.log("Error Baja:",error);});      
      }
    )
    return promesaBaja;
    }
  
  public guardarEmpleadoPromesa(unEmpleado:Empleado): Promise<Empleado> {
      
          let promesaAlta: Promise<Empleado> = new Promise((resolve,reject) =>
              {
                this.miserviciohttp.teDoyUnaPromesaAlta(this.miUrl,unEmpleado)
                        .then(datos=>{ console.log("Datos Alta:",datos);
                                       resolve(unEmpleado);
                                     } 
                             )
                        .catch(error=>{console.log("Error Alta:",error);});      
              }
            )
            return promesaAlta;
          }  
}
