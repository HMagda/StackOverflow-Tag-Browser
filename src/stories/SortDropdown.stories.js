import React from 'react';
import SortDropdown from '../components/SortDropdown';

export default {
  title: 'Components/SortDropdown',
  component: SortDropdown,
};

const Template = (args) => <SortDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortBy: 'popular_desc',
  handleSortChange: () => {},
};
