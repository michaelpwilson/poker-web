import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TypeId, CardId } from 'src/app/interfaces/Card';
import { CardService } from './card.service';

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

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCardDetails(this.card_id, this.type_id);
  }

  ngOnChanges(): void {
    this.getCardDetails(this.card_id, this.type_id);
  }

  private getCardDetails(card_id: CardId, type_id: TypeId) {
    this.cardNumber = this.cardService.getCardNumber(card_id);
    this.cardType = this.cardService.getCardType(type_id);
  }
}
