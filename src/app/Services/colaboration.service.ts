import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collaboration} from "../Enteties/collaboration";

@Injectable({
  providedIn: 'root'
})
export class ColaborationService {


  private baseUrl = "http://localhost:8081/Pidev/servlet/Collaboration";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<Collaboration[]> {
    return this.http.get<Collaboration[]>(this.baseUrl+"/displaycollaborations");
  }
  public save(collaboration: Collaboration) {
    return this.http.post<Collaboration>(this.baseUrl+"/addcollaboration", collaboration);
  }
  deleteCollaboration(id:number){
    return this.http.delete(this.baseUrl+"/deletecollaboration/"+id);
  }
  updateCollaboration(collaboration:Collaboration){
    return this.http.put<Collaboration>(this.baseUrl+"/updatecollaboration", collaboration);
  }
  public find(id:number): Observable<Collaboration> {
    return this.http.get<Collaboration>(this.baseUrl+"/find/"+id);
  }
}
