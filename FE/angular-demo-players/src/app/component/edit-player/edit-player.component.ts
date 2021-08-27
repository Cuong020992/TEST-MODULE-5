import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Player} from "../../model/player";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id: any;
  playerForm: FormGroup;
  player: Player = {
    id: "0",
    name: "",
    champ: "",
    kda: "",
    des: ""
  }

  constructor(private playerService: PlayerService,
              private router: Router,
              private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.getPlayer(this.id)
    })
  }


  ngOnInit(): void {
  }

  private getPlayer(id: any) {
    this.playerService.getPlayerById(id).subscribe(data => {
      this.playerForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        champ: new FormControl(data.champ),
        kda: new FormControl(data.kda),
        des: new FormControl(data.des),

      })
    })
  }

  update() {
    this.player.name = this.playerForm.value.name;
    this.player.champ = this.playerForm.value.champ;
    this.player.kda = this.playerForm.value.kda;
    this.player.des = this.playerForm.value.des;
    this.playerService.updatePlayer(this.id, this.player).subscribe(data => {
      this.router.navigate([''])
      alert('Succeed')
    })
  }

}
