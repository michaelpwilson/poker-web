import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cards: any;
  currentAction: number = 3;

  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.emit('getPlayerCards', 0);

    this.socket.on('getPlayerCards', (data) => {
      const response = data.response;
      const playerCards = response.playerCards;
      
      this.cards = playerCards;
    });
  }

  onActionChange(data: any) {
    this.currentAction = data.value;
  }
}
