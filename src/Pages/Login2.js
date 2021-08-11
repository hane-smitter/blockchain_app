import React from 'react';

export default class Login extends React.Component
{
  render()
  {
    return (
      <div class="main-content">
          <section class="section">
			    <div class="section-body">
			        <div class="row">

			            <div class="col-12 col-md-12 col-lg-12">
			                <div class="card">
			                    <div class="card-header">
			                        <h4>Login Page</h4>
			                    </div>
			                    <div class="card-body">
			                        <div class="row">
			                            <div class="col-md-6">
			                                <div class="form-group">
			                                    <label>Email</label>
			                                    <input type="text" class="form-control" placeholder="Email Address" />
			                                </div>
			                            </div>
			                            <div class="col-md-6">
			                                <div class="form-group">
			                                    <label>Password</label>
			                                    <input type="password" class="form-control" placeholder="Password" />
			                                </div>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <div class="form-group">
			                                    <input type="button" class="form-control btn-success" value="Press Login" />
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>

      </div>
    );
  }
}