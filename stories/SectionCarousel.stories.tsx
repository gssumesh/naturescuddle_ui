import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SectionCarousel, SectionCarouselProps } from '../src';

const meta: Meta = {
  title: 'SectionCarousel',
  component: SectionCarousel,
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

const Template: Story<SectionCarouselProps> = args => <SectionCarousel {...args} />;

export const Default = Template.bind({});

Default.args = { 
};
