import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';
import { NavbarType } from './Navbar.type';
import { mockNavbarProps } from './Navbar.mocks';

export default {
  title: 'Components/Navbar',
  component: Navbar,

  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const JustLogo = Template.bind({});

JustLogo.args = {
  ...mockNavbarProps.justLogo,
} as NavbarType;

export const WithButtons = Template.bind({});

WithButtons.args = {
  ...mockNavbarProps.withButtons,
} as NavbarType;
