import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeroWithCard, HeroWithCardProps } from '../src';

const meta: Meta = {
  title: 'HeroWithCard',
  component: HeroWithCard,
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

const Template: Story<HeroWithCardProps> = args => <HeroWithCard {...args} />;

export const Default = Template.bind({});

Default.args = { 
  text: 'Pure, Soft, Organic', 
  image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2736&q=80'
  // image: "https://images.unsplash.com/flagged/photo-1571600463906-d18aed112195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80"
};
