import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { AddTrafficChallan } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function TrafficChallan(){

     const[cnic,setcnic] = useState("")
     const[vnum,setvnum] = useState("")
     const[ctype,setctype] = useState("Helmet")
     const[cfee,setcfee] = useState(0)
     const[date,setdate] = useState(0)  
 const [{contract, accounts}, dispatch] = useStore();
 const [isTransactionInProcess, setTransactionInprocess] = useState(false);
 const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
 const [transactionError , setTransactionError] = useState("");

    const viewFee = (e) =>{
          e.preventDefault();

          if(e.target.value === 'Helmet'){
               document.getElementById('getFee').value = 200;
               setcfee(200)
          }
  
          if(e.target.value === 'Double Passenger'){
            document.getElementById('getFee').value = 400;
            setcfee(400)
       }
       
       if(e.target.value === 'Over Speeding'){
        document.getElementById('getFee').value = 600;
        setcfee(600)
    }
   
       if(e.target.value === 'Wrong Side'){
    document.getElementById('getFee').value = 800;
       setcfee(800)
   }
 
}

const handleSubmit = async () => {
  console.log(cnic)
  console.log(vnum)
  console.log(ctype)
  console.log(cfee)
  console.log(date)

  setTransactionSuccessful(true);
  setTransactionError("");

  try {
    setTransactionInprocess(true)
    const newTransaction = {
      cnic : cnic,
      vehicle_no : vnum,
      challan_type : ctype,
      amount : cfee,
      date: date
    }
    await AddTrafficChallan(contract, accounts,newTransaction, dispatch);
    
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
        <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6">
            <div className="card card-primary">
              <div className="card-header">
                <h4>Traffic Challan</h4>
              </div>
              <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="cnic">Enter CNIC#</label>
                    <input type="text" className="form-control" name="cnic" onChange={(e)=>setcnic(e.target.value)}/>
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="cnic">Enter Vehicle#</label>
                    <input type="text" className="form-control" placeholder="ABC-123" name="cnic" onChange={(e)=>setvnum(e.target.value)}/>
                  </div>
                

                  <div className="form-group">
                    <label htmlFor="vehicle">Challan Type</label>
                <select id="vehicle" className="form-control" onChange={(e) =>{viewFee(e) ; setctype(e.target.value)}}>
                 <option value="Helmet" selected>Helmet</option>
                 <option value="Double Passenger">Double Passenger</option>
                <option value="Over Speeding">Over Speeding</option>
                <option value="Wrong Side" >Wrong Side</option>
                </select>
                </div>

                <div className="form-group">
                    <label htmlFor="weaponNum">Challan Fees</label>
                    <input type="number" id="getFee" className="form-control"  disabled  />
                  </div>

                  <div className="form-group">
                    <label htmlFor="weaponNum">Date</label>
                    <input type="date" id="getFee" className="form-control" onChange={(e)=>{ var date1 = new Date(e.target.value);  var date2= date1.getTime()/1000; setdate(date2)}}/>
                  </div>


                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                 <center> 
                    {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..." />}
                    {isTransactionSuccessful == true ? <div style={{color:"green"}}></div>:null}
                    {!isTransactionSuccessful && <div style={{color:"red"}}>{transactionError}</div>} 
                 </center>
              </div>
            </div>
          </div>
        </div>
     </div>
      )
}
export default TrafficChallan;