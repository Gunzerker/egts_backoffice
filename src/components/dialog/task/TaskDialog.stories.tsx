import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskDialog from './TaskDialog';

export default {
  title: 'templates/TaskDialog',
  component: TaskDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TaskDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TaskDialog> = (args) => (
  <TaskDialog {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
