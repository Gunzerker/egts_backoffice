import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectTextfield, { ISelectTextField } from './SelectTextfield';
import { mockSelectTextfieldProps } from './SelectTextfield.mocks';

export default {
  title: 'templates/SelectTextfield',
  component: SelectTextfield,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectTextfield>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectTextfield> = (args) => (
  <SelectTextfield {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSelectTextfieldProps.base,
} as ISelectTextField;
