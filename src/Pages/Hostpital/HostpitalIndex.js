import React from 'react';

import Header from './../../Components/Header';
import Footer from './../../Components/Footer';

export default class HostpitalIndex extends React.Component
{
  render()
  {
    return (
    	<div>
    		<Header />
			<div class="main-content">
			  <section class="section">
				    <div class="section-body">
				        <div class="row">
				            <div class="col-12">
				                <div class="card">
				                    <div class="card-header">
				                        <h4>Hospital Management</h4>
				                    </div>
				                    <div class="card-body">
				                        <div class="table-responsive">
				                            <table class="table table-striped table-hover" id="save-stage">
				                                <thead>
				                                <tr>
				                                    <th>Name</th>
				                                    <th>Position</th>
				                                    <th>Office</th>
				                                    <th>Age</th>
				                                    <th>Start date</th>
				                                    <th>Salary</th>
				                                </tr>
				                                </thead>
				                                <tbody>
				                                <tr>
				                                    <td>Tiger Nixon</td>
				                                    <td>System Architect</td>
				                                    <td>Edinburgh</td>
				                                    <td>61</td>
				                                    <td>2011/04/25</td>
				                                    <td>$320,800</td>
				                                </tr>
				                                <tr>
				                                    <td>Garrett Winters</td>
				                                    <td>Accountant</td>
				                                    <td>Tokyo</td>
				                                    <td>63</td>
				                                    <td>2011/07/25</td>
				                                    <td>$170,750</td>
				                                </tr>
				                                </tbody>
				                            </table>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</section>
			</div>
			<Footer/>
      	</div>
    );
  }
}