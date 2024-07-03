import { Component, inject } from '@angular/core';
import { PersonajesService } from './personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickAndMorty';

  private personajesService = inject(PersonajesService);
  datos:any;

  constructor(){
    this.personajesService.getPersonajes()
        .subscribe({
          next: data =>{
            console.log(data);
            this.datos = data;
          },
          error: e =>{
            console.log(`dio un error ${e}`);
            
          }
        })
  }

  anterior(){
    if(this.datos.info.prev){
      this.personajesService.getPersonajesPaginacion(this.datos.info.prev)
      .subscribe({
        next: data =>{
          console.log(data);
          this.datos = data;
        },
        error: e =>{
          console.log(`dio un error ${e}`);
          
        }
      })
    }else{
      return;
    }
  }

  siguiente(){
    if(this.datos.info.next){
      this.personajesService.getPersonajesPaginacion(this.datos.info.next)
      .subscribe({
        next: data =>{
          console.log(data);
          this.datos = data;
        },
        error: e =>{
          console.log(`dio un error ${e}`);
          
        }
      })
    }else{
      return;
    }
  }

}
