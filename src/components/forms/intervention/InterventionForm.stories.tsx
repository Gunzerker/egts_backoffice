import { ComponentMeta, ComponentStory } from '@storybook/react';
import InterventionForm, { IInterventionForm } from './InterventionForm';
import { mockInterventionFormProps } from './InterventionForm.mocks';

export default {
  title: 'templates/InterventionForm',
  component: InterventionForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InterventionForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InterventionForm> = (args) => (
  <InterventionForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInterventionFormProps.base,
} as IInterventionForm;
