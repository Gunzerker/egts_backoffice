import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthForm, { IAuthForm } from './AuthForm';
import { mockAuthFormProps } from './AuthForm.mocks';

export default {
  title: 'templates/AuthForm',
  component: AuthForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthForm> = (args) => (
  <AuthForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAuthFormProps.base,
} as IAuthForm;
