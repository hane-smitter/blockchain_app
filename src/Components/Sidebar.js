import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class Sidebar extends React.Component
{
  render()
  {
    return (
      <div class="main-sidebar sidebar-style-2">
          <aside id="sidebar-wrapper">
		    <div class="sidebar-brand">
		        <a href="/dashboard"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
		                class="logo-name"><abbr title="Digital Identity">DI</abbr></span>
		        </a>
		    </div>
		    <ul class="sidebar-menu">
		        <li class="menu-header">Main</li>
		        <li class="dropdown">
		            <a href="/dashboard" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
		        </li>
		        <li class="dropdown">
		            <a href="javascript:void(0);" class="menu-toggle nav-link has-dropdown">
		                <i data-feather="briefcase"></i><span>Hospitals</span>
		            </a>
		            <ul class="dropdown-menu">
		                <li><a class="nav-link" href="/hospital-add">Add New</a></li>
		                <li><a class="nav-link" href="hospital-index">Manage</a></li>
		            </ul>
		        </li>
		        <li class="dropdown">
		            <a href="javascript:void(0);" class="menu-toggle nav-link has-dropdown">
		                <i data-feather="briefcase"></i><span>Traffic Challance</span>
		            </a>
		            <ul class="dropdown-menu">
		                <li><a class="nav-link" href="/traffic-add">Add New</a></li>
		                <li><a class="nav-link" href="/traffic-index">Manage</a></li>
		            </ul>
		        </li>
		    </ul>
		</aside>
      </div>
    );
  }
}