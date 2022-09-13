import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { ButtonType } from './Button.type';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps.primary,
} as ButtonType;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockButtonProps.secondary,
} as ButtonType;
