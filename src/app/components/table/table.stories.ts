import {
  withKnobs,
  number
} from '@storybook/addon-knobs';
import { TableComponent } from './table.component';

export default {
    title: 'Table',
    decorators: [withKnobs],
    parameters: {
        knobs: {
          disableDebounce: true,
        },
    },
}

export const Default = () => {
    return {
        component: TableComponent,
        props: {
        },
    }
};