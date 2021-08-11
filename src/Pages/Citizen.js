
import { useStore } from '../context/GlobalState';
import React,{useState, useEffect} from "react";
import { getCitizens } from '../store/asyncActions';
import { AddPayChallan } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function Citizen() {

  const [{citizen_UnionCouncil, citizen_Education,citizen_Weapon,citizen_TrafficChallan,citizen_CriminalRecord}] = useStore();
  const [{contract, accounts}, dispatch] = useStore();   
  const [cnic,setcnic] = useState("");
 const [isTransactionInProcess, setTransactionInprocess] = useState(false);
 const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
 const [transactionError , setTransactionError] = useState("");
  

  const handleSubmit1 = async () =>{
    
    try {
     const newTransaction = {
       cnic : cnic
     }
     await getCitizens(contract, accounts,newTransaction, dispatch);
     console.log("cnic is ", cnic)
     console.log("union ", citizen_UnionCouncil)
     console.log("education ", citizen_Education)
     console.log("weapon ", citizen_Weapon)
     console.log("traffic ", citizen_TrafficChallan)
     console.log("criminal ",citizen_CriminalRecord)
  
    }catch (error){
        console.log("error trax = ",error);
      }

  }
 
  var challan_fee,dates,date2,cnics,vehicles,ch_type;

  function setchallanfee(ac,cnic,vehicle,date,c_type){
    challan_fee = ac;
    cnics=cnic
    vehicles = vehicle
    ch_type = c_type
    dates = new Date(date)  
    date2= (dates.getTime()/1000).toFixed(0)
  }

  async function payChallan() {
   console.log("fee",challan_fee)
   console.log("date",date2)
   console.log("cnic",cnics)
   console.log("type",ch_type)
   console.log("vehicle",vehicles)

   setTransactionSuccessful(true);
  setTransactionError("");

  try {
    setTransactionInprocess(true)
    const newTransaction = {
      cnic : cnics,
      vehicle_no : vehicles,
      date: date2,
      challan_type: ch_type,
      challan_fee:challan_fee
    }
    await AddPayChallan(contract, accounts,newTransaction, dispatch);
    
    setTransactionInprocess(false);
    setTransactionSuccessful(true);
   
  }catch (error){
       console.log("error trax = ",error);
       setTransactionInprocess(false);
       setTransactionSuccessful(false);
       setTransactionError(error.message); 
  }
  }

  return(
     
   <div class="container"> 
    <br/>
   <div class="row">
    <div class="col-6">  
    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
  </div>
  <input type="text" class="form-control" placeholder="Enter Your CNIC" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{setcnic(e.target.value)}} required/>
  &nbsp;
</div>
</div>
<div class="col-2">
<input type="button" class="form-control" value="Search" required={true} onClick={handleSubmit1}/>
</div>
<div class="col-8">
  <br/>
<h3>Union Council</h3>  
 <table class="table" name="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">CNIC</th>
      <th scope="col">Father Name</th>
      <th scope="col">Mother Name</th>
      <th scope="col">Father CNIC</th>
      <th scope="col">Mother CNIC</th>
      <th scope="col">Gender</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">City</th>
    </tr>
  </thead>
 
  <tbody>
 
     {citizen_UnionCouncil.map( (na) => {
      
    var date2 = new Date(na.dob * 1000);
    var day = date2.getDate()
   var month = date2.getMonth()+1
   var year = date2.getFullYear()

   return <tr>
        <td>{na.name}</td>
        <td>{na.cnic}</td>
        <td>{na.f_name}</td>
        <td>{na.m_name}</td>
        <td>{na.f_cnic}</td>
        <td>{na.m_cnic}</td>
        <td>{na.gender}</td>
        <td>{(na.dob == 0)?(null):(day +"/"+month+"/"+year)}</td>
        <td>{na.city}</td>
        </tr>
      
     })}
     
  </tbody>

</table>
</div>
</div>
 
<div class="col-8">
<br/>
  <h3>Educations</h3>  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Marks</th>
      <th scope="col">Precentage</th>
      <th scope="col">Grade</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  {citizen_Education.map( (obj) => {
     return obj.map( (na) => {
      var date2 = new Date(na.date * 1000);
      var day = date2.getDate()
     var month = date2.getMonth()+1
     var year = date2.getFullYear()
   return <tr>
      <td>{na.subject}</td>
      <td>{na.marks}</td>
      <td>{na.prcentage}</td>
      <td>{na.grade}</td>
      <td>{day+"/"+month+"/"+year}</td>
    </tr>
      })
  })}
  </tbody>
</table>
</div>

<div class="col-8">
<br/>
  <h3>Weapon Lisence</h3>  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Weapon Type</th>
      <th scope="col">Lisence #</th>
      <th scope="col">Status</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  {citizen_Weapon.map( (na) => {
      var date2 = new Date(na.date * 1000);
      var day = date2.getDate()
     var month = date2.getMonth()+1
     var year = date2.getFullYear()
   return <tr>
      <td>{na.weapon_type}</td>
      <td>{na.lisence_no}</td>
      <td>{na.status}</td>
      <td>{(na.date == 0) ? (null):(day+"/"+month+"/"+year)}</td>
    </tr>
  })}
  </tbody>
</table>
</div>


<div class="col-8">
<br/>
  <h3>Criminal Record</h3>  
  <table class="table">
  <thead>
    <tr>
    <th scope="col">Record Found</th>
      <th scope="col">Remarks</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
 
  <tbody>
  {citizen_CriminalRecord.map( (obj) => {
   return obj.map((na) =>{
      var date2 = new Date(na.date * 1000);
      var day = date2.getDate()
      var month = date2.getMonth()+1
      var year = date2.getFullYear()

  return <tr>
      <td>{(na.record_found == true)?("Yes"):(null)}{(na.record_found == false)?("No"):(null)}</td>
      <td>{na.remarks}</td>
      <td>{(na.date == 0)?(null):(day+"/"+month+"/"+year)}</td>
    </tr>
    })
  })}
  </tbody>
  
</table>
</div>



<div class="col-8">
<br/>
  <h3>Traffic Challan</h3>
  <center>
    {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}
    {isTransactionSuccessful == true ? <div style={{color:"green"}}></div>:null}
    {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>}   
  </center> 
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Vehicle #</th>
      <th scope="col">Challan Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
      <th scope="col">Pay Challan</th>
    </tr>
  </thead>
  <tbody>

  {citizen_TrafficChallan.map( (obj) => {
    return obj.map( (na) => {
      var date2 = new Date(na.date * 1000);
      var day = date2.getDate()
     var month = date2.getMonth()+1
     var year = date2.getFullYear()
    return (<tr>
      <td>{na.vehicle_no}</td>
      <td>{na.challan_type}</td>
      <td>{na.amount}</td>
      <td>{day+"/"+month+"/"+year}</td>
      <td><button type="button" class="btn btn-primary" onClick={() => {
         var date = new Date();
        setchallanfee(na.amount,na.cnic,na.vehicle_no,date,na.challan_type);payChallan()}}>Pay</button>
       </td>
    </tr>
    )
    })
  })}
  </tbody>
</table>
</div>

</div>

  )
}

export default Citizen;