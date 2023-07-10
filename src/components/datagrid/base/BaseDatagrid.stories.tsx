import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseDatagrid, { IBaseDatagrid } from './BaseDatagrid';
import { mockBaseDatagridProps } from './BaseDatagrid.mocks';

export default {
  title: 'templates/BaseDatagrid',
  component: BaseDatagrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseDatagrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseDatagrid> = (args) => (
  <BaseDatagrid {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseDatagridProps.base,
} as IBaseDatagrid;
