import React from 'react';

function EducaionDashboard(){
   
    const handleSubmit = () => {
        window.location.href = "./education";
    }
    const handleSubmit1 = () => {
        window.location.href = "./show-education";
    }
    return(
      <div class="container">
          <br/>
   <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Add Education Details of Person</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={handleSubmit}>Add Education</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Persons Details</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={handleSubmit1}>Show All</a>
 </div>
</div>

    </div>
  </div>
  </div>
  )
}
export default EducaionDashboard;