import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageHeader, { IPageHeader } from './PageHeader';
import { mockPageHeaderProps } from './PageHeader.mocks';

export default {
  title: 'templates/PageHeader',
  component: PageHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPageHeaderProps.base,
} as IPageHeader;
