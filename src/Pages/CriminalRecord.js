import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { AddCriminalRecord } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function CriminalRecord(){

  const [cnic, setCnic] = useState("");
  const [record, setrecord] = useState(false);
  const [remarks, setremarks] = useState("");
  const [date, setDate] = useState(0);
  const [{contract, accounts}, dispatch] = useStore();
  const [isTransactionInProcess, setTransactionInprocess] = useState(false);
  const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
  const [transactionError , setTransactionError] = useState("");

  const handleSubmit= async () => {
     console.log(cnic)
     console.log(record)
     console.log(remarks)
     console.log(date)

     setTransactionSuccessful(true);
     setTransactionError("");

     try {
      setTransactionInprocess(true)
      const newTransaction = {
        cnic : cnic,
        record_found : record,
        remarks : remarks,
        date : date
      }
      await AddCriminalRecord(contract, accounts,newTransaction, dispatch);
      
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
            <h4>Criminal Record</h4>
          </div>
          <div className="card-body">
              <div className="form-group">
                <label htmlFor="cnic">Enter CNIC#</label>
                <input type="text" className="form-control" name="cnic" onChange={(e)=>setCnic(e.target.value)}/>
              </div>
            
              <div className="form-group">
                <label htmlFor="cnic">Record Found </label>
                <br/>
                    <div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" value={true} class="form-check-input" name="optradio" onChange={(e)=>setrecord(e.target.value)}/>Yes
  </label>
</div>
<div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" value={false} class="form-check-input" name="optradio" onChange={(e)=>setrecord(e.target.value)}/>No
  </label>
</div>
</div>
            
   <div className="form-group">
                <label htmlFor="cnic">Remarks</label>
                <textarea className="form-control" onChange={(e)=>setremarks(e.target.value)} > </textarea>
              </div> 

              <div className="form-group">
                <label htmlFor="cnic">Date</label>
                <input type="date" className="form-control" onChange={(e)=>{ var date1 = new Date(e.target.value); var date2= date1.getTime()/1000; setDate(date2)}} />
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
export default CriminalRecord;