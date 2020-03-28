import { CardComponent } from './card.component';

import {
  withKnobs,
  select
} from '@storybook/addon-knobs';

export default {
    title: 'Card',
    decorators: [withKnobs],
    parameters: {
        knobs: {
          disableDebounce: true,
        },
    },
}

export const Default = () => {
    const types: any = {
        Heart: "0",
        Spade: "1",
        Club: "2",
        Diamond: "3"
    };
    const cardType = select("Type", types, "1");

    const cardNumbers = {
        2: "0",
        3: "1",
        4: "2",
        5: "3",
        6: "4",
        7: "5",
        8: "6",
        9: "7",
        10: "8",
        Jack: "9",
        Queen: "10",
        King: "11",
        Ace: "12"
    };

    const cardNumber = select("Number", cardNumbers, "12");

    return {
        component: CardComponent,
        props: {
            type_id: cardType,
            card_id: cardNumber
        },
    }
};