import {Component, OnInit} from '@angular/core';
import {Player} from "../../model/player";
import {PlayerService} from "../../service/player.service";

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  players: Player[];

  constructor(private playerService:PlayerService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.playerService.getAll().subscribe((data:Player[])=>{
      console.log(data)
      this.players = data;
    })
  }
}
