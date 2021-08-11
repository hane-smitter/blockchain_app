import React, {Component} from 'react';
import { Redirect, Route } from "react-router";


export default class TrafficLogin extends React.Component
{

  constructor(props)
  {
    super( props );

    this.state = {
      email: '',
      err_email: false,
      password: '',
      err_password: '',
      redirectToReferrer: false
    };
    
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    
  };

  login() {

    this.state.err_email = false;
    if( this.state.email == "" ) {
        this.state.err_email = true;
    }

    this.state.err_password = false;
    if( this.state.password == "" ) {
        this.state.err_password = true;
    }

    if( this.state.email && this.state.password ) {

        this.state.redirectToReferrer = true;

        if( this.state.email == "admin@traffic.com" && this.state.password == "welcome" ) {
            this.state.redirectToReferrer = false;

            window.location.href = "/challan-dashboard";
        }
    }
    this.setState(this.state);
  }


  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }     

  render()
  {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Traffic Login</h4>
              </div>
              <div className="invalid-feedback" style={{display: this.state.redirectToReferrer == true ? "block" : "none", marginLeft:"24px" }}>Invalid Username or password</div>
              <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="email">Email or Username</label>
                    <input type="email" className="form-control" name="email" onChange={this.onChange} />
                    <div className="invalid-feedback" style={{display: this.state.err_email == true ? "block" : "none" }}>Please fill in your email</div>
                  </div>
                  <div className="form-group">
                    <div className="d-block">
                      <label htmlFor="password" className="control-label">Password</label>
                    </div>
                    <input type="password" className="form-control" name="password" onChange={this.onChange} />
                    <div className="invalid-feedback" style={{display: this.state.err_password == true ? "block" : "none" }}>please fill in your password</div>
                  </div>  
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.login}>
                      Login
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}