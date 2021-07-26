import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hero, HeroProps } from '../src';

const meta: Meta = {
  title: 'Hero',
  component: Hero,
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

const Template: Story<HeroProps> = args => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = { 
  text: 'Pure, Soft, Organic', 
  image: "https://images.unsplash.com/flagged/photo-1571600463906-d18aed112195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80"
};
