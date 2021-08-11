import React from 'react';

export default class LandingHome extends React.Component
{
  render()
  {
    return (
     <div class="main-wrapper main-wrapper-1 const-landing">
         <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div class="container">
                <a class="navbar-brand" href="#">Blockchain</a>
            </div>
        </nav>
        <div class="main-content">
            <section class="section">
                <div class="row">
                  <h1 class="const-choose">Choose Authentication</h1><br/><br/>
                </div>
                <div class="section-body">
                    <div class="row">
                    <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-citizen">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Union</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/union-login">Union Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-education pricing-highlight">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Education</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/education-login">Education Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-weapon">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Weapon</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/weapon-login">Weapon Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                         
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-citizen pricing-highlight">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Criminal</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/criminal-login">Criminal Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                      
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-traffic">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Traffic</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/traffic-login">Traffic Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                      
                    
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-citizen pricing-highlight">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Marriage</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/marriage-login">Marriage Login<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    

                    
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="pricing const-citizen">
                                <div class="pricing-title">Authentication</div>
                                <div class="pricing-padding">
                                    <div class="pricing-price">
                                        <div>Citizen</div>
                                    </div>
                                </div>
                                <div class="pricing-cta">
                                    <a href="/citizen">Citizen<i class="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </section>
        </div>
    </div>
    );
  }
}