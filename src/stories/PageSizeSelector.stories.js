import React from 'react';
import PageSizeSelector from '../components/PageSizeSelector';

export default {
  title: 'Components/PageSizeSelector',
  component: PageSizeSelector,
};

const Template = (args) => <PageSizeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSize: 10,
  onPageSizeChange: () => {},
};
