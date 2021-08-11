import React from 'react';
import { useStore } from '../context/GlobalState';

function ShowChallan() {

  const [{getPendingTrafficChallan}] = useStore();
  console.log(getPendingTrafficChallan)

  const [{getPaidTrafficChallan}] = useStore();
  console.log(getPaidTrafficChallan)
  

  const [getView,setView] = React.useState(0); 
 
  const changeHandle1 = (e)=>{
    e.preventDefault();
     setView(1);
    }  
     
    const changeHandle2 = (e)=>{
     e.preventDefault();
     setView(2);
     }   

  return(

     
      <div>

      
      <div class="container">
      <br></br>
      <div class="row justify-content-around">
    <div class="col-4">
    <div class="card text-center">
 
  <div class="card-body">
    <h5 class="card-title">Show All Paid Challan</h5>
    <br/>
    <a href="#" class="btn btn-primary" onClick={changeHandle1}>Show All</a>
  </div>

</div>
 </div>

    <div class="col-4">
    <div class="card text-center">
 
 <div class="card-body">
   <h5 class="card-title">Show All Not Paid Challan</h5>
   <br/>
   <a href="#" class="btn btn-primary" onClick={changeHandle2}>Show All</a>
 </div>
</div>

    </div>
  </div>
</div>

  {
        
    
     (getView === 1) ? (
    
      <div class="container-fluid">
          {getPaidTrafficChallan.map((obj) => {
   return(
      <table class="table">
  <thead>
  <tr>
    <th scope="col">CNIC</th>
    <th scope="col">Vehicle #</th>
    <th scope="col">Challan Type</th>
    <th scope="col">Amount</th>
    <th scope="col">Date</th>
  </tr>
  </thead>
  <tbody>
  {obj.map( (na) => {
  
var date2 = new Date(na.date * 1000);
var day = date2.getDate()
var month = date2.getMonth()+1
var year = date2.getFullYear()
  return <tr>
    <td>{na.cnic}</td>
    <td>{na.vehicle_no}</td>
    <td>{na.challan_type}</td>
    <td>{na.amount}</td>
    <td>{day+"/"+month+"/"+year}</td>
  </tr>
    })}
  </tbody>
  </table>
    )
  })}
  </div>
    ):(null) 
  }

  {
       (getView === 2) ? (

        <div class="container-fluid">
           {getPendingTrafficChallan.map((obj) => {
   return(
        <table class="table">
    <thead>
    <tr>
      <th scope="col">CNIC</th>
      <th scope="col">Vehicle #</th>
      <th scope="col">Challan Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
    </tr>
    </thead>
    <tbody>
    {obj.map( (na) => {

var date2 = new Date(na.date * 1000);
var day = date2.getDate()
var month = date2.getMonth()+1
var year = date2.getFullYear()

   return <tr>
      <td>{na.cnic}</td>
      <td>{na.vehicle_no}</td>
      <td>{na.challan_type}</td>
      <td>{na.amount}</td>
      <td>{day+"/"+month+"/"+year}</td>
    </tr>
     })}
    </tbody>
    </table>
       )
      })}
    </div>
    ):(null) 
  }

</div>
  

    )
}
export default ShowChallan;