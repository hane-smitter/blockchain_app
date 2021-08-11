import React from 'react';

function ChallanDashboard(){
   
    const handleSubmit = () => {
        window.location.href = "./challan";
    }
    const handleSubmit1 = () => {
        window.location.href = "./show-challan";
    }
    return(
      <div class="container">
          <br/>
   <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Create Challan of Person</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={handleSubmit}>Create Challan</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Challan Records</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={handleSubmit1}>Show All</a>
 </div>
</div>

    </div>
  </div>
  </div>
  )
}
export default ChallanDashboard; 