import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Quote, QuoteProps } from '../src';

const meta: Meta = {
  title: 'Quote',
  component: Quote,
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

const Template: Story<QuoteProps> = args => <Quote {...args} />;

export const Default = Template.bind({});

Default.args = { 
};
