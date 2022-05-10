import { Component, OnInit } from '@angular/core';
import {Comment} from "../../Enteties/comment";
import {CommentService} from "../../Services/comment.service";
import {Like} from "../../Enteties/like";
import {LikeService} from "../../Services/like.service";
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from "@angular/common";
import {Forum} from "../../Enteties/forum";
import {ForumService} from "../../Services/forum.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  id: number=0;
  idl: Number=0;
  idd: Number=0;

  userid: number=1;
  userrole:string="a";
  forum: Forum = new Forum;

  like: Like = new Like;
  comment: Comment = new Comment;
  comments: Comment[]=[];
  myDate = new Date();
  pipe = new DatePipe('en-IST');
  constructor(private commentService: CommentService,private likeService: LikeService,private _Activatedroute:ActivatedRoute,private forumService: ForumService)
  {this._Activatedroute.paramMap.subscribe(params => {
    this.id = Number(params.get('id'));
  });

    this.forumService.find(this.id).subscribe(data => {
      this.forum = data;
    });

  }

  ngOnInit(): void {
    this.commentService.findAll(this.id).subscribe(data => {
      this.comments = data;
    });
  }
  onSubmit() {
    this.myDate=new Date();
    let ChangedFormat = this.pipe.transform(this.myDate, 'YYYY-dd-MM');

    if (ChangedFormat != null) {
      this.comment.date = ChangedFormat;
    }
    this.comment.userid=this.userid;
    this.commentService.save(this.comment,this.id).subscribe(result => this.ngOnInit());
  }
  deleteComment(id:number){
    this.commentService.deleteForumById(id).subscribe(()=>this.commentService.findAll(this.id).subscribe(data=>{this.comments=data}));
  }

  edit(comment: Comment){
    this.comment = comment;
  }
  updateComment(){
    this.commentService.updateForum(this.comment).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addlike(etat:number, comid:number) {
    this.count(comid);

    this.like.etat=etat;
    this.like.userid=1;
    this.likeService.save(this.like,comid).subscribe(result => this.count(comid));



  }
  countlike(comid:number) {
    return this.likeService.nblike(comid).subscribe(data => this.idl=data);

  }
  countdislike(comid:number) {
    return this.likeService.nbdislike(comid).subscribe(data => this.idd=data);

  }
  count(comid:number) {
    this.likeService.nblike(comid).subscribe(data => this.idl=data);
    return this.likeService.nbdislike(comid).subscribe(dataa => this.idd=dataa);

  }

  getlike() {
    return this.idl;

  }
  getdislike() {
    return this.idd;

  }

  viral() {
    return this.commentService.findviral(this.id).subscribe(data => {
      this.comment = data;
    });

  }

  show(id:number): void {
    this.commentService.findAll(id).subscribe(data => {
      this.comments = data;
    });
  }
}

