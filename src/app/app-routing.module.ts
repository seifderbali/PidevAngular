import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CommentComponent} from "./Component/comment/comment.component";
import {ForumComponent} from "./Component/forum/forum.component";
import {CollaborationComponent} from "./Component/collaboration/collaboration.component";
import {OffreComponent} from "./Component/offre/offre.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'collaboration', component: CollaborationComponent },
  { path: 'offre/:id', component: OffreComponent },
  { path: 'comment/:id', component: CommentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  []
