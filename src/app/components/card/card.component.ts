import { Component, OnInit, Input, OnChanges } from '@angular/core';

export type TypeId = number|string;
export type CardId = number|string;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['type_id', 'card_id']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() private type_id: TypeId;
  @Input() private card_id: CardId;
  public cardNumber: string;
  public cardType: string;

  constructor() {
  }

  ngOnInit(): void {
    this.getCardDetails(this.card_id, this.type_id);
  }

  ngOnChanges(): void {
    this.getCardDetails(this.card_id, this.type_id);
  }

  private getCardDetails(card_id: CardId, type_id: TypeId) {
    this.cardNumber = this.getCardNumber(card_id);
    this.cardType = this.getCardType(type_id);
  }

  private getCardType(type_id: TypeId): string {
    type_id = Number(type_id);
    let name: string;

    switch (type_id) {
      case 0:
        name = "heart";
        break;
      case 1:
        name = "spade";
        break;
      case 2:
        name = "club";
        break;
      case 3:
        name = "diamond";
        break;
    }

    return name;
  }

  private getCardNumber(card_id: CardId): string {
    card_id = Number(card_id);
    let name: string;

    switch (card_id) {
      case 0:
        name = "2";
        break;
      case 1:
        name = "3";
        break;
      case 2:
        name = "4";
        break;
      case 3:
        name = "5";
        break;
      case 4:
        name = "6";
        break;
      case 5:
        name = "7";
        break;
      case 6:
        name = "8";
        break;
      case 7:
        name = "9";
        break;
      case 8:
        name = "10";
        break;
      case 9:
        name = "j";
        break;
      case 10:
        name = "q";
        break;
      case 11:
        name = "k";
        break;
      case 12:
        name = "a";
        break;
    }
    return name;
  }
}
