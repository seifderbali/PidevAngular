import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Forum} from "../Enteties/forum";
@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseUrl = "http://localhost:8081/Pidev/servlet/Forum";
  constructor(private http: HttpClient) {   }
  public findAll(id:number): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.baseUrl+"/display/"+id);
  }
  public save(forum: Forum) {
    return this.http.post<Forum>(this.baseUrl+"/addforum", forum);
  }
  deleteForumById(id:number){
    return this.http.delete(this.baseUrl+"/deleteforum/"+id);
  }
  updateForum(forum:Forum){
    return this.http.put<Forum>(this.baseUrl+"/updateforum/"+forum.id, forum);
  }
  public search(keyword:string): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.baseUrl+"/search/"+keyword);
  }
  public generate(id:number){
    return this.http.get(this.baseUrl+"/generate/"+id);
  }
  public findviral(): Observable<Forum> {
    return this.http.get<Forum>(this.baseUrl+"/viral");
  }
  public find(id:number): Observable<Forum> {
    return this.http.get<Forum>(this.baseUrl+"/find/"+id);
  }

}
