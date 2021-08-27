import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPlayerComponent} from "./component/list-player/list-player.component";
import {CreatePlayerComponent} from "./component/create-player/create-player.component";

const routes: Routes = [
  {
    path:'',
    component : ListPlayerComponent
  },
  {
    path:'create-player',
    component : CreatePlayerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
