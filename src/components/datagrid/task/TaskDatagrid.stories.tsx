import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskDatagrid, { ITaskDatagrid } from './TaskDatagrid';
import { mockTaskDatagridProps } from './TaskDatagrid.mocks';

export default {
  title: 'templates/TaskDatagrid',
  component: TaskDatagrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TaskDatagrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TaskDatagrid> = (args) => (
  <TaskDatagrid {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTaskDatagridProps.base,
} as ITaskDatagrid;
