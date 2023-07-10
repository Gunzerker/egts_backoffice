import { ComponentMeta, ComponentStory } from '@storybook/react';
import BaseCalendar, { IBaseCalendar } from './BaseCalendar';
import { mockBaseCalendarProps } from './BaseCalendar.mocks';

export default {
  title: 'templates/BaseCalendar',
  component: BaseCalendar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseCalendar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseCalendar> = (args) => (
  <BaseCalendar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseCalendarProps.base,
} as IBaseCalendar;
