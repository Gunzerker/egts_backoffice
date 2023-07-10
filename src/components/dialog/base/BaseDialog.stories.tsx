import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseDialog from './BaseDialog';

export default {
  title: 'templates/BaseDialog',
  component: BaseDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseDialog> = (args) => (
  <BaseDialog {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
