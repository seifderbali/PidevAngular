import { Component, OnInit } from '@angular/core';
import {ColaborationService} from "../../Services/colaboration.service";
import {OffreService} from "../../Services/offre.service";
import {Collaboration} from "../../Enteties/collaboration";
import {Forum} from "../../Enteties/forum";


@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.css']
})
export class CollaborationComponent implements OnInit {
  collaboration: Collaboration = new Collaboration;
  collaborations: Collaboration[]=[];
  userid: number=1;

  constructor(private collaborationService: ColaborationService,private offreService: OffreService) { }

  ngOnInit(): void {
    this.collaborationService.findAll().subscribe(data => {
      this.collaborations = data;
    });
  }
  onSubmit() {
    this.collaborationService.save(this.collaboration).subscribe(result => this.ngOnInit());
  }
  deletecollab(id:number){
    this.collaborationService.deleteCollaboration(id).subscribe(()=>this.collaborationService.findAll().subscribe(data=>{this.collaborations=data}));
  }

  edit(collaboration: Collaboration){
    this.collaboration = collaboration;
  }
  updateCollab(){
    this.collaborationService.updateCollaboration(this.collaboration).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
