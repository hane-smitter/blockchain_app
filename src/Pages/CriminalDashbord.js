import React from 'react';

function CriminalDashboard(){
   
    const handleSubmit = () => {
        window.location.href = "./criminal";
    }
    const handleSubmit1 = () => {
        window.location.href = "./show-criminal";
    }
    return(
      <div class="container">
          <br/>
   <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Add Criminal Record of Person</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={handleSubmit}>Add Criminal</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Criminal Records</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={handleSubmit1}>Show All</a>
 </div>
</div>

    </div>
  </div>
  </div>
  )
}
export default CriminalDashboard;