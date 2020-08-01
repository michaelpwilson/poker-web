import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { TableService } from './table.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  inputs: ['currentPlayerAction'],
  outputs: ['onCurrentPlayerChange']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() currentPlayerAction: number;

  public players: Array<any> = [{
    avatar: "https://media1.giphy.com/media/11QEuO6MtKCl6E/giphy.gif?cid=ecf05e4…&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media1.giphy.com/media/YAnpMSHcurJVS/giphy.gif?cid=ecf05e473d99ec2b78ea74c01b55307920c6af4d4565fbf0&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media1.giphy.com/media/l0HlUxcWRsqROFYuk/giphy.gif?cid=ecf05e47cc25d93b00f70cb3750ad82765036792210b8268&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media1.giphy.com/media/WPnkJKCA3c476pGjGu/giphy.gif?cid=ecf05e470f9ced5c00976240a431972a6851938b650c5d50&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media2.giphy.com/media/3ohjUR3PKyssNa6sOA/giphy.gif?cid=ecf05e47f3d114e602e81e70f1ca9f1bb18e22e86544484a&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media3.giphy.com/media/BomatsZbWzd9c1P298/giphy.gif?cid=ecf05e47682bf5d1932e8bd23dd08f14e4f2aed9795fe52f&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media3.giphy.com/media/bpbio2T6cN7Qk/giphy.gif?cid=ecf05e47329dd107bb36835c3b728dc23766ce3cecc3d101&rid=giphy.gif",
    cards: [],
  }, {
    avatar: "https://media2.giphy.com/media/l2SpOCdNB9WRmXc3K/giphy.gif?cid=ecf05e475b759c4c2128b521fbc9c00dbc1979626b6ab3a9&rid=giphy.gif",
    cards: []
  }];

  tableDeckCards: any = [];
  private currentDeckPosition: number = 0;
  currentPlayerPosition: number = 1;
  @Output() onCurrentPlayerChange = new EventEmitter<any>();

  constructor(private tableService: TableService, private socket: Socket) { }

  getPlayers() {
    this.tableService.getPlayers().subscribe((data: any) => {
      this.players = data;
    });
  }

  ngOnChanges(changes: any) {
    let value = parseInt(changes.currentPlayerAction.currentValue);

    switch (value) {
      case 0:
        this.players[this.currentPlayerPosition - 1].cards = []; 
        this.onCurrentPlayerChange.emit(0);
        this.nextPlayer();
        break;
      case 1:
        //
        this.nextPlayer();
        break;
      case 2:
        this.nextPlayer();
        break;
      case 3:
        break;
    }
  }

  nextPlayer() {
    this.currentPlayerPosition += 1;
  }

  restart() {
    this.tableDeckCards = [];
    this.currentDeckPosition = 0;
    this.currentPlayerPosition = 1;

    this.getDeckCards();
    this.getPlayerCards(0);
  }

  ngOnInit(): void {
    this.getPlayers();

    let data = {
      playerId: '5edb0049dbefaa2c97acc646',
      tableId: '5edb0008dbefaa2c97acc645'
    };

    this.socket.emit('joinTable', data);

    this.socket.on(`table-${data.tableId}-player-${data.playerId}`, (data) => {
      console.log(data);
    });
    
    this.socket.on('getPlayerCards', (data) => {
      const response = data.response;
      const playerIndex = response.playerIndex;
      const playerCards = response.playerCards;
      this.players[playerIndex].cards = playerCards;
    });

    this.socket.on('getDeckCards', (data) => {
      this.tableDeckCards.push(data);   
    });

    this.socket.on('exception', function(data) {
      console.log('event', data);
    });
    this.socket.on('disconnect', function() {
      console.log('Disconnected');
    });
  }

  private getPlayerCards(playerIndex: number) {
    this.socket.emit('getPlayerCards', playerIndex);
  }

  public nextCardDeck() {
    this.currentDeckPosition += 1;
    this.getDeckCards();
  }

  private getDeckCards() {
    this.socket.emit('getDeckCards', this.currentDeckPosition);
  }
}