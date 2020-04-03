import {
    withKnobs,
    number
  } from '@storybook/addon-knobs';
  import { moduleMetadata } from '@storybook/angular';
import { ChatModule } from './chat.module';
import { ChatComponent } from './chat.component';
  
  export default {
      title: 'Chat',
      decorators: [
        withKnobs,
        moduleMetadata({
          imports: [ChatModule]
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
          component: ChatComponent,
          props: {
          },
      }
  };