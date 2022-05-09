import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Enteties/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = "http://localhost:8081/Pidev/servlet/Comment";
  constructor(private http: HttpClient) {   }
  public findAll(id:number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl+"/comments/"+id);
  }
  public save(forum: Comment, id:number) {
    return this.http.post<Comment>(this.baseUrl+"/addcomment/"+id, forum);
  }
  deleteForumById(id:number){
    return this.http.delete(this.baseUrl+"/deletecomment/"+id);
  }
  updateForum(comment:Comment){
    return this.http.put<Comment>(this.baseUrl+"/updatecomment", comment);
  }
  public findviral(id:number): Observable<Comment> {
    return this.http.get<Comment>(this.baseUrl+"/viral/"+id);
  }
}
