import {Component, OnInit} from '@angular/core';
import {Player} from "../../model/player";
import {FormControl, FormGroup} from "@angular/forms";
import {PlayerService} from "../../service/player.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  player: Player = {
    id: "0",
    name: "",
    champ: "",
    kda: "",
    des: ""
  }
  playerForm: FormGroup = new FormGroup({
      name: new FormControl(),
      champ: new FormControl(),
      kda: new FormControl(),
      des: new FormControl()
    }
  );

  constructor(private playerService: PlayerService, private  router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.player.name = this.playerForm.value.name;
    this.player.champ = this.playerForm.value.champ;
    this.player.kda = this.playerForm.value.kda;
    this.player.des = this.playerForm.value.des;
    this.playerService.createPlayer(this.player).subscribe(result => {
      this.router.navigate([''])
      alert('thêm thành công')
    })
  }

}
