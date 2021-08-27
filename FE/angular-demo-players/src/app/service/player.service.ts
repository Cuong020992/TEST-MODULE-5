import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../model/player";
const API_URL = 'http://localhost:3001/players/'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Player[]>{
    return this.httpClient.get<Player[]>(API_URL);
  }

  createPlayer(player:Player):Observable<Player>{
    return this.httpClient.post<Player>(API_URL, player);
  }

  updatePlayer(id:any,player:Player):Observable<Player>{
    const idParam = Number(id);
    return this.httpClient.put<Player>(API_URL + idParam, player)
  }
  deletePlayer(id:any):Observable<Player>{
    const idParam = Number(id);
    return this.httpClient.delete<Player>(API_URL + idParam)
  }
  getPlayerById(id:any):Observable<Player>{
    const idParam = Number(id);
    return this.httpClient.get<Player>(API_URL + idParam)
  }
}
