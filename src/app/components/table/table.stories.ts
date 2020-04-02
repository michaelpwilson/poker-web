import {
  withKnobs,
  number
} from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { TableModule } from './table.module';

export default {
    title: 'Table',
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [TableModule]
      })
    ],
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