import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlayerComponent} from "./component/list-player/list-player.component";
import {CreatePlayerComponent} from "./component/create-player/create-player.component";
import {EditPlayerComponent} from "./component/edit-player/edit-player.component";
import {DeletePlayerComponent} from "./component/delete-player/delete-player.component";

const routes: Routes = [
  {
    path:'',
    component : ListPlayerComponent
  },
  {
    path:'create-player',
    component : CreatePlayerComponent
  },
  {
    path:'update-player/:id',
    component : EditPlayerComponent
  },
  {
    path:'delete-player/:id',
    component : DeletePlayerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
