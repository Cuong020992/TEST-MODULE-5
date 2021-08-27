import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Player} from "../../model/player";
import {PlayerService} from "../../service/player.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
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
      // this.deletePlayer(this.id)
    })
  }

  ngOnInit(): void {
    this.getPlayer(this.id)
  }

  public getPlayer(id: any) {
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


  public deletePlayer(id: any) {
    console.log(id)
    this.playerService.deletePlayer(id).subscribe(data =>{
      this.router.navigate([''])
      alert("Xoa thanh cong")
    })
  }
}
