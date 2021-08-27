import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPlayerComponent } from './component/list-player/list-player.component';
import { CreatePlayerComponent } from './component/create-player/create-player.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { DeletePlayerComponent } from './component/delete-player/delete-player.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListPlayerComponent,
    CreatePlayerComponent,
    EditPlayerComponent,
    DeletePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
