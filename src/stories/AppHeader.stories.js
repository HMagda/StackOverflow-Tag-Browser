import React from 'react';
import AppHeader from '../components/AppHeader';

export default {
    title: 'AppHeader',
    component: AppHeader,
};

const Template = (args) => <AppHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
