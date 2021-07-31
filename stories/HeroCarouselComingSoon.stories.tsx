import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeroCarouselComingSoon, HeroCarouselComingSoonProps } from '../src';

const meta: Meta = {
  title: 'HeroCarouselComingSoon',
  component: HeroCarouselComingSoon,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HeroCarouselComingSoonProps> = args => <HeroCarouselComingSoon {...args} />;

export const Default = Template.bind({});

Default.args = { 
};
