import React from 'react';

function UnionDashboard(){
   
    const handleSubmit = () => {
        window.location.href = "./union-council";
    }
    const handleSubmit1 = () => {
        window.location.href = "./show-unoin";
    }
    return(
      <div class="container">
          <br/>
   <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Add In Union Council</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={handleSubmit}>Add Person</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Union Council</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={handleSubmit1}>Show All</a>
 </div>
</div>

    </div>
  </div>
  </div>
  )
}
export default UnionDashboard;