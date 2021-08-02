import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavComingSoon, NavComingSoonProps } from '../src';

const meta: Meta = {
  title: 'Header',
  component: NavComingSoon,
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

const Template: Story<NavComingSoonProps> = args => <NavComingSoon {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};
