import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './Component/comment/comment.component';
import { ForumComponent } from './Component/forum/forum.component';
import { OffreComponent } from './Component/offre/offre.component';
import { CollaborationComponent } from './Component/collaboration/collaboration.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { ControlWrapperComponent } from './control-wrapper/control-wrapper.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

@NgModule({
  declarations: [
    AppComponent,


    HomeComponent,
    routingComponents,
    CommentComponent,
    ForumComponent,
    OffreComponent,
    CollaborationComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    ControlWrapperComponent,

    UserNavbarComponent,
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
