import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  playersUrl: string = "http://localhost:3000/table/players/5edb0008dbefaa2c97acc645";

  constructor(private http: HttpClient, private socket: Socket) { }

  public getPlayers() {
    return this.http.get(this.playersUrl);
  }

  public getPlayerDeck() {
    this.socket.emit('getPlayerDeck', 0, response =>
      console.log(response),
    );
  }

  public getTableDeck() {
    return new Promise((resolve, reject) => {
      this.socket.emit('getTableDeck', 0, (response) => {
        resolve(response);
      });
    })
  }
}
