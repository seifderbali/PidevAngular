import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffreService} from "../../Services/offre.service";
import {Offre} from "../../Enteties/offre";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  ch:String="seif";
  id: number=0;
  offre: Offre = new Offre;
  offres: Offre[]=[];
  constructor(private offreService: OffreService,private _Activatedroute:ActivatedRoute) {this._Activatedroute.paramMap.subscribe(params => {
    this.id = Number(params.get('id'));

  }); }
  ngOnInit(): void {
    this.offreService.findAll(this.id).subscribe(data => {
      this.offres = data;
    });
  }
  onSubmit() {
    this.offreService.save(this.offre,this.id).subscribe(result => this.ngOnInit());
  }
  deleteOffre(id:number){
    this.offreService.deleteOffre(id).subscribe(()=>this.offreService.findAll(this.id).subscribe(data=>{this.offres=data}));
  }

  edit(offre: Offre){
    this.offre = offre;
  }
  updateOffre(){
    this.offreService.updateOffre(this.offre).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  avOffre() {

    return this.offreService.available(this.id).subscribe(data => {
      this.ch = data;

      });
    }


  }
