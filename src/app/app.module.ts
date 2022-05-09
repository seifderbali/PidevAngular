import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './Component/comment/comment.component';
import { ForumComponent } from './Component/forum/forum.component';
import { OffreComponent } from './Component/offre/offre.component';
import { CollaborationComponent } from './Component/collaboration/collaboration.component';

@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    HomeComponent,
    routingComponents,
    CommentComponent,
    ForumComponent,
    OffreComponent,
    CollaborationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
