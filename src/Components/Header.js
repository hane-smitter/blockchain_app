import React from 'react';

import TopHeader from './TopHeader';
import Sidebar from './Sidebar';

export default class Header extends React.Component
{
  render()
  {
    return (
      <header>
      	<TopHeader />
      	<Sidebar />
      </header>
    );
  }
}