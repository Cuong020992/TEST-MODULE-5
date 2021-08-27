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
    return this.httpClient.get<Player[]>(API_URL)
  }
}
