import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';
import { HeroType } from './Hero.type';
import { mockHeroProps } from './Hero.mocks';

export default {
  title: 'Components/Hero',
  component: Hero,

  argTypes: {},
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockHeroProps.base,
} as HeroType;
