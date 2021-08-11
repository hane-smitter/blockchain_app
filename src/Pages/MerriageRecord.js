import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { AddMarriage } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function MerriageRecord(){

  const [boyname, setboyname] = useState("");
  const [girlname, setgirlname] = useState("");
  const [boycnic, setboycnic] = useState("");
  const [girlcnic, setgirlcnic] = useState("");
  const [date, setDate] = useState(0);
 const [{contract, accounts}, dispatch] = useStore();
  const [isTransactionInProcess, setTransactionInprocess] = useState(false);
  const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
  const [transactionError , setTransactionError] = useState("");

  const handleSubmit = async () => {
    console.log(boyname)
    console.log(boycnic)
    console.log(girlname)
    console.log(girlcnic)
    console.log(date)

    setTransactionSuccessful(true);
    setTransactionError("");

    try {
      setTransactionInprocess(true)
      const newTransaction = {
        boy_name : boyname,
        boy_cnic : boycnic,
        girl_name : girlname,
        girl_cnic : girlcnic,
        date: date
      }
      await AddMarriage(contract, accounts,newTransaction, dispatch);
      
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
            <h4>Marriage</h4>
          </div>
          <div className="card-body">
          
          <div className="form-group">
                <label htmlFor="cnic">Enter Boy Name</label>
                <input type="text" className="form-control" name="cnic" onChange={(e) => setboyname(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="cnic">Enter Boy CNIC#</label>
                <input type="text" className="form-control" name="cnic" onChange={(e) => setboycnic(e.target.value)}/>
              </div>
            
              <div className="form-group">
                <label htmlFor="cnic">Enter Girl Name</label>
                <input type="text" className="form-control" name="cnic" onChange={(e) => setgirlname(e.target.value)}/>
              </div>

              <div className="form-group">
                <label htmlFor="cnic">Enter Girl CNIC#</label>
                <input type="text" className="form-control" name="cnic" onChange={(e) => setgirlcnic(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="cnic">Date</label>
                <input type="date" className="form-control" onChange={(e)=>{ var date1 = new Date(e.target.value);  var date2= date1.getTime()/1000; setDate(date2)}} />
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
export default MerriageRecord;