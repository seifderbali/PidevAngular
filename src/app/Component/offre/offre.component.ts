import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffreService} from "../../Services/offre.service";
import {Offre} from "../../Enteties/offre";
import {Collaboration} from "../../Enteties/collaboration";
import {ColaborationService} from "../../Services/colaboration.service";
import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';

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
  userid: number=1;
  userrole:string="a";
  collaboration: Collaboration = new Collaboration;

  constructor(private offreService: OffreService,private colaborationService: ColaborationService,private _Activatedroute:ActivatedRoute)
  {this._Activatedroute.paramMap.subscribe(params => {
    this.id = Number(params.get('id'));
  });
    this.colaborationService.find(this.id).subscribe(data => {
      this.collaboration = data;
    });
  }
  ngOnInit(): void {
    this.offreService.findAll(this.id).subscribe(data => {
      this.offres = data;
    });
  }
  onSubmit() {
    this.offre.userid=this.userid;
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
    tostring(): string {
    return ' Name:' +this.collaboration.nom +'\n'+ ' Mail: ' + this.collaboration.mail+'\n'+ ' Date: ' + this.collaboration.date;
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Offres.pdf');
    });
  }

  }
