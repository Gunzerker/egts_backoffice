import { ComponentMeta, ComponentStory } from '@storybook/react';
import ToolbarLayout, { IToolbarLayout } from './ToolbarLayout';
import { mockToolbarLayoutProps } from './ToolbarLayout.mocks';

export default {
  title: 'templates/ToolbarLayout',
  component: ToolbarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ToolbarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToolbarLayout> = (args) => (
  <ToolbarLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockToolbarLayoutProps.base,
} as IToolbarLayout;
