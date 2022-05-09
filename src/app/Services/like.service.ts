import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Like} from "../Enteties/like";

@Injectable({
  providedIn: 'root'
})
export class LikeService {


  private baseUrl = "http://localhost:8081/Pidev/servlet/Like";
  constructor(private http: HttpClient) {   }

  public save(like: Like, id:number) {
    return this.http.post<Like>(this.baseUrl+"/addlike/"+id, like);
  }
  public nblike(id:number) {
    return this.http.get<Number>(this.baseUrl+"/countlike/"+id);
  }
  public nbdislike(id:number) {
    return this.http.get<Number>(this.baseUrl+"/countdislike/"+id);
  }
  }
