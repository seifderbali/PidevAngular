import { Component, OnInit } from '@angular/core';
import {Forum} from "../../Enteties/forum";
import {ForumService} from "../../Services/forum.service";
import {Comment} from "../../Enteties/comment";
import {CommentService} from "../../Services/comment.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']

})
export class ForumComponent implements OnInit {
  search:string="";
  userid: number=1;
  userrole:string="a";
  forum: Forum = new Forum;
  forums: Forum[]=[];
  fid: number=13;
  comments: Comment[]=[];
  myDate = new Date();
  pipe = new DatePipe('en-IST');
  captcha:string="";

  constructor(private forumService: ForumService,private commentService: CommentService) {

  }
  totallength:any;
  page:number=1;


  ngOnInit(): void {
    this.forumService.findAll(this.userid).subscribe(data => {
      this.forums = data;
      this.totallength = data.length;
    });
  }
  onSubmit() {
      this.myDate=new Date();
      let ChangedFormat = this.pipe.transform(this.myDate, 'YYYY-dd-MM');

    if (ChangedFormat != null) {
      this.forum.date = ChangedFormat;
    }
    this.forum.userid=this.userid;
    this.forumService.save(this.forum).subscribe(result => this.ngOnInit());
  }
  deleteComment(id:number){
    this.forumService.deleteForumById(id).subscribe(()=>this.forumService.findAll(this.userid).subscribe(data=>{this.forums=data}));
  }

  edit(forum: Forum){
    this.forum = forum;
  }
  updateComment(){
    this.forumService.updateForum(this.forum).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchAction(keyword: string){
    this.forumService.search(keyword).subscribe(data => {
      this.forums = data;
    });
  }


  generateQR(id: number){
    this.forumService.generate(id).subscribe(result => this.ngOnInit() );
    this.fid=id;
  }


  viral() {

    return this.forumService.findviral().subscribe(data => {
      this.forum = data;
      this.commentService.findAll(this.forum.id).subscribe(data => {
        this.comments = data;
      });
    });

  }
  resolved(captchaResponse: string){
    this.captcha =captchaResponse;
  }

}

