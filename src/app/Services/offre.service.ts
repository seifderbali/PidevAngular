import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../Enteties/offre";

@Injectable({
  providedIn: 'root'
})
export class OffreService {


  private baseUrl = "http://localhost:8081/Pidev/servlet/Offre";
  constructor(private http: HttpClient) {   }
  public findAll(id:number): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.baseUrl+"/displayoffre/"+id);
  }
  public save(offre: Offre, id:number) {
    return this.http.post<Offre>(this.baseUrl+"/addoffre/"+id, offre);
  }
  deleteOffre(id:number){
    return this.http.delete(this.baseUrl+"/deleteoffre/"+id);
  }
  updateOffre(offre:Offre){
    return this.http.put<Offre>(this.baseUrl+"/updateoffre", offre);

  }
  available(id:number){
    return this.http.get<String>(this.baseUrl+"/available/"+id);

  }
}
