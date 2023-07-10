import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchTextfield, { ISearchTextfield } from './SearchTextfield';
import { mockSearchTextfieldProps } from './SearchTextfield.mocks';

export default {
  title: 'templates/SearchTextfield',
  component: SearchTextfield,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchTextfield>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchTextfield> = (args) => (
  <SearchTextfield {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchTextfieldProps.base,
} as ISearchTextfield;
