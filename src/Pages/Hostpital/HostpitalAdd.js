import React from 'react';

import Header from './../../Components/Header';
import Footer from './../../Components/Footer';

export default class HostpitalAdd extends React.Component
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
				            <div class="col-12 col-md-12 col-lg-12">
				                <div class="card">
				                    <div class="card-header">
				                        <h4>Hostpital Form</h4>
				                    </div>
				                    <div class="card-body">
				                        <div class="row">
				                            <div class="col-md-6">
				                                <div class="section-title">Default</div>
				                                <div class="form-group">
				                                    <label>Default Select</label>
				                                    <select class="form-control">
				                                        <option>Option 1</option>
				                                        <option>Option 2</option>
				                                        <option>Option 3</option>
				                                    </select>
				                                </div>
				                            </div>
				                            <div class="col-md-6">
				                                <div class="section-title">Select 2</div>
				                                <div class="form-group">
				                                    <label>Select2</label>
				                                    <select class="form-control select2">
				                                        <option>Option 1</option>
				                                        <option>Option 2</option>
				                                        <option>Option 3</option>
				                                    </select>
				                                </div>
				                            </div>
				                        </div>
				                        <div class="form-group">
				                            <label>Select2 Multiple</label>
				                            <select class="form-control select2" multiple="">
				                                <option>Option 1</option>
				                                <option>Option 2</option>
				                                <option>Option 3</option>
				                                <option>Option 4</option>
				                                <option>Option 5</option>
				                                <option>Option 6</option>
				                            </select>
				                        </div>
				                        <div class="section-title">jQuery Selectric</div>
				                        <div class="form-group">
				                            <label>jQuery Selectric</label>
				                            <select class="form-control selectric">
				                                <option>Option 1</option>
				                                <option>Option 2</option>
				                                <option>Option 3</option>
				                                <option>Option 4</option>
				                                <option>Option 5</option>
				                                <option>Option 6</option>
				                            </select>
				                        </div>
				                        <div class="form-group">
				                            <label>jQuery Selectric Multiple</label>
				                            <select class="form-control selectric" multiple="">
				                                <option>Option 1</option>
				                                <option>Option 2</option>
				                                <option>Option 3</option>
				                                <option>Option 4</option>
				                                <option>Option 5</option>
				                                <option>Option 6</option>
				                            </select>
				                        </div>
				                        <div class="section-title">Select Group Button</div>
				                        <div class="form-group">
				                            <label class="form-label">Button Input</label>
				                            <div class="selectgroup w-100">
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="radio1" value="1" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button">S</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="radio1" value="2" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button">M</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="radio1" value="3" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button">L</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="radio1" value="4" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button">XL</span>
				                                </label>
				                            </div>
				                        </div>
				                        <div class="form-group">
				                            <label class="form-label">Icons input</label>
				                            <div class="selectgroup w-100">
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="transportation" value="2" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-mobile"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="transportation" value="1" class="selectgroup-input-radio" checked />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-tablet"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="transportation" value="6" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-laptop"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="transportation" value="5" class="selectgroup-input-radio" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-times"></i></span>
				                                </label>
				                            </div>
				                        </div>
				                        <div class="form-group">
				                            <label class="form-label">Icon input</label>
				                            <div class="selectgroup selectgroup-pills">
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="icon-input" value="1" class="selectgroup-input" checked />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-sun"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="icon-input" value="2" class="selectgroup-input" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-moon"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="icon-input" value="3" class="selectgroup-input" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i
				                                                class="fas fa-cloud-rain"></i></span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="radio" name="icon-input" value="4" class="selectgroup-input" />
				                                    <span class="selectgroup-button selectgroup-button-icon"><i class="fas fa-cloud"></i></span>
				                                </label>
				                            </div>
				                        </div>
				                        <div class="form-group">
				                            <label class="form-label">Your skills</label>
				                            <div class="selectgroup selectgroup-pills">
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="HTML" class="selectgroup-input" checked />
				                                    <span class="selectgroup-button">HTML</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="CSS" class="selectgroup-input" />
				                                    <span class="selectgroup-button">CSS</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="PHP" class="selectgroup-input" />
				                                    <span class="selectgroup-button">PHP</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="JavaScript" class="selectgroup-input" />
				                                    <span class="selectgroup-button">JavaScript</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="Ruby" class="selectgroup-input" />
				                                    <span class="selectgroup-button">Ruby</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="Ruby" class="selectgroup-input" />
				                                    <span class="selectgroup-button">Ruby</span>
				                                </label>
				                                <label class="selectgroup-item">
				                                    <input type="checkbox" name="value" value="C++" class="selectgroup-input" />
				                                    <span class="selectgroup-button">C++</span>
				                                </label>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				                <div class="card">
				                    <div class="card-header">
				                        <h4>Toggle Switches</h4>
				                    </div>
				                    <div class="card-body">
				                        <div class="form-group">
				                            <div class="control-label">Toggle switches</div>
				                            <div class="custom-switches-stacked mt-2">
				                                <label class="custom-switch">
				                                    <input type="radio" name="option" value="1" class="custom-switch-input" checked />
				                                    <span class="custom-switch-indicator"></span>
				                                    <span class="custom-switch-description">Option 1</span>
				                                </label>
				                                <label class="custom-switch">
				                                    <input type="radio" name="option" value="2" class="custom-switch-input" />
				                                    <span class="custom-switch-indicator"></span>
				                                    <span class="custom-switch-description">Option 2</span>
				                                </label>
				                                <label class="custom-switch">
				                                    <input type="radio" name="option" value="3" class="custom-switch-input" />
				                                    <span class="custom-switch-indicator"></span>
				                                    <span class="custom-switch-description">Option 3</span>
				                                </label>
				                            </div>
				                        </div>
				                        <div class="form-group">
				                            <div class="control-label">Toggle switch single</div>
				                            <label class="custom-switch mt-2">
				                                <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" />
				                                <span class="custom-switch-indicator"></span>
				                                <span class="custom-switch-description">I agree with terms and conditions</span>
				                            </label>
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