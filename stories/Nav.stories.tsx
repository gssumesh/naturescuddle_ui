import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Nav, NavProps } from '../src';

const meta: Meta = {
  title: 'Header',
  component: Nav,
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

const Template: Story<NavProps> = args => <Nav {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};
