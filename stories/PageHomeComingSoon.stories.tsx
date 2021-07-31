import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHomeComingSoon, PageHomeComingSoonProps } from '../src';

const meta: Meta = {
  title: 'PageHomeComingSoon',
  component: PageHomeComingSoon,
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

const Template: Story<PageHomeComingSoonProps> = args => <PageHomeComingSoon {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};
