import React from 'react';
import Pagination from '../components/CustomPagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  currentPage: 1,
  onPageChange: () => {},
};
