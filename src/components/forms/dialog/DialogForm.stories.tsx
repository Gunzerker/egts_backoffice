import { ComponentMeta, ComponentStory } from '@storybook/react';
import DialogForm, { IDialogForm } from './DialogForm';
import { mockDialogFormProps } from './DialogForm.mocks';

export default {
  title: 'templates/DialogForm',
  component: DialogForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DialogForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DialogForm> = (args) => (
  <DialogForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDialogFormProps.base,
} as IDialogForm;
