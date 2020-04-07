import { Injectable } from '@angular/core';
import { TypeId, CardId } from 'src/app/interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() { }

  public getCardType(type_id: TypeId): string {
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

  public getCardNumber(card_id: CardId): string {
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
