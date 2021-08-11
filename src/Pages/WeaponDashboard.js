import React from 'react';

function WeaponDashboard(){
   
    const handleSubmit = () => {
        window.location.href = "./weapon-lisence";
    }
    const handleSubmit1 = () => {
        window.location.href = "./show-weapon";
    }
    return(
      <div class="container">
          <br/>
   <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Issue Weaopn to Person</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={handleSubmit}>Issue Weapon</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Weapon Data</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={handleSubmit1}>Show All</a>
 </div>
</div>

    </div>
  </div>
  </div>
  )
}
export default WeaponDashboard;