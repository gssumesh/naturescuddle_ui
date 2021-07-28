import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHome, PageHomeProps } from '../src';

const meta: Meta = {
  title: 'PageHome',
  component: PageHome,
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

const Template: Story<PageHomeProps> = args => <PageHome {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};
