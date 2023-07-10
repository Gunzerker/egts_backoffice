import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputErrors, { IInputErrors } from './InputErrors';
import { mockInputErrorsProps } from './InputErrors.mocks';

export default {
  title: 'templates/InputErrors',
  component: InputErrors,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InputErrors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputErrors> = (args) => (
  <InputErrors {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputErrorsProps.base,
} as IInputErrors;
