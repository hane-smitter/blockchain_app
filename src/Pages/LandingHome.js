import React from "react";
import {
  Money,
  EcoOutlined,
  CastForEducationOutlined,
  FavoriteBorderOutlined,
  TrafficOutlined,
  GavelOutlined,
} from "@material-ui/icons";

export default class LandingHome extends React.Component {
  render() {
    return (
      <div class="main-wrapper main-wrapper-1 const-landing">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
          <div class="container">
            <a class="navbar-brand" href="#">
              Blockchain
            </a>
          </div>
        </nav>
        <div class="main-content">
          <section class="section">
            <div class="row">
              <h1 class="const-choose">Choose Authentication</h1>
              <br />
              <br />
            </div>
            <div class="section-body">
              <div class="row">
                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-citizen">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <Money className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Union <small class="small-font">(200,000.00)</small>
                          </h5>
                          <span className="small-font">
                            Union Councils are the fifth level (the lowest
                            level) of government in Pakistan...{" "}
                            <a href="/union-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/union-login">
                        Union Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-education pricing-highlight">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <CastForEducationOutlined className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Education{" "}
                            <small class="small-font">(200,000.00)</small>
                          </h5>
                          <span className="small-font">
                          Education is defined as the process of gaining knowledge. An example of education is attending...{" "}
                            <a href="/union-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/education-login">
                        Education Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-weapon">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <EcoOutlined className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Weapon{" "}
                            <small class="small-font">(1000)</small>
                          </h5>
                          <span className="small-font">
                          Weapon, an instrument used in combat for the purpose of killing, injuring, or defeating...{" "}
                            <a href="/union-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/weapon-login">
                        weapon Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-citizen pricing-highlight">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <GavelOutlined className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Criminal{" "}
                            <small class="small-font">(1000)</small>
                          </h5>
                          <span className="small-font">
                          A criminal is defined as a person who has done something
                          illegal. An example of a criminal is a bank robber...{" "}
                            <a href="/union-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/criminal-login">
                        Criminal Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-traffic">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <TrafficOutlined className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Traffic{" "}
                            <small class="small-font">(1000)</small>
                          </h5>
                          <span className="small-font">
                          Traffic is defined as vehicles or people in the vehicles, a delay that involves transportation or movement...{" "}
                            <a href="/traffic-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/traffic-login">
                        Traffic Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-citizen pricing-highlight">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <FavoriteBorderOutlined className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Marriage{" "}
                            <small class="small-font">(20000)</small>
                          </h5>
                          <span className="small-font">
                          A commonly accepted and encompassing definition of marriage is the following: a formal union...{" "}
                            <a href="/marriage-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/marriage-login">
                        Marriage Login<i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                  <div class="pricing const-citizen">
                    <div class="pricing-title">Authentication</div>
                    <div class="pricing-padding">
                      <div class="w-100 h-100 d-flex">
                        <div className="flex-grow-1 align-self-center px-1">
                          <Money className="text-white" />
                        </div>
                        <div
                          classame="flex-grow-3 pl-1"
                          style={{ borderLeft: "1px solid" }}
                        >
                          <h5 class="text-white mb-0">
                            Citizen{" "}
                            <small class="small-font">(20000)</small>
                          </h5>
                          <span className="small-font">
                          A citizen is a person who, by place of birth, nationality of one or both parents,....{" "}
                            <a href="/union-login">
                              <u>readmore</u>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pricing-cta">
                      <a href="/citizen">
                        Citizen<i class="fas fa-arrow-right"></i>
                      </a>
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
