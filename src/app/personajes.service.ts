import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const base_url = "https://rickandmortyapi.com/api";

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private http = inject(HttpClient);
  
  constructor() { }

  getPersonajes(){
    const endpoint:string = `${base_url}/character`;
    
    return this.http.get(endpoint);
  }

  getPersonajesPaginacion(url:string){
    const endpoint:string = url;
    
    return this.http.get(endpoint);
  }
}
