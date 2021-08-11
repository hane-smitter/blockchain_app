import React,{ useState } from 'react';
import { useStore } from '../context/GlobalState';
import { AddWeaponLisence } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function WeaponLisence(){

    const [cnic, setCnic] = useState("");
    const [wtype, setWtype] = useState("Self-loading pistols");
    //const [lisence, setLisence] = useState("");
    const [date, setDate] = useState(0);
    const [{contract, accounts,getWeaponLisence}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    const [transactionError , setTransactionError] = useState("");

  
    var newlisence = "";
    var  val1 ="";
    var val2 ="";
    const[complete_lisence, set_completelisence] = useState("")
 // store incremental license
    var inclisence="";
  var lisence = getWeaponLisence.map((obj) => obj.map((na) =>
     newlisence =  na.lisence_no));
     console.log("lisen", lisence)

     const generateLisence = () => {
           if(newlisence == ""){
             inclisence = "ABC100001"
             document.getElementById("lisence").value = inclisence;
             set_completelisence(inclisence)
           }

           else{
          
                  for(var i = 0; i<newlisence.length; i++){
                    var alpha="";
                    if(i<3)
                    {
                      alpha=newlisence.charAt(i);
                      val1= val1.concat(alpha); 
                    }
                    else{
                      alpha=newlisence.charAt(i);
                      val2= val2.concat(alpha); 
                    }
                    
                  }
                  val2=parseInt(val2);
                  val2=val2+1;
                  val2=val2.toString()
                  inclisence=inclisence.concat(val1);
                  inclisence=inclisence.concat(val2);
                  console.log(newlisence)
                  console.log(inclisence);
                  document.getElementById("lisence").value = inclisence;
                  set_completelisence(inclisence)
                  }
            }


    const handleSubmit = async (e) => {
      e.preventDefault();
     // console.log(String(inclisence))
     // console.log(wtype)
   //   console.log(lisence)
    //  console.log(date)
      
      setTransactionSuccessful(true);
      setTransactionError("");

      try {
        setTransactionInprocess(true)
        const newTransaction = {
          cnic : cnic,
          weapon_type : wtype,
          lisence_no : complete_lisence,
          date : date
        }
        console.log("transaction obj = ",newTransaction)
        await AddWeaponLisence(contract, accounts,newTransaction, dispatch);
        
        setTransactionInprocess(false);
        setTransactionSuccessful(true);
       
      }catch (error){
           console.log("error trax = ",error);
           setTransactionInprocess(false);
           setTransactionSuccessful(false);
           setTransactionError(error.message); 
      }
   
    }

    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h4>Weapon Lisence</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="cnic">Enter CNIC#</label>
                      <input type="text" className="form-control" name="cnic" onChange={(e)=>{setCnic(e.target.value)}}/>
                    </div>
                  
                    <div className="form-group">
                      <label htmlFor="weapon">Weapon</label>              
                      
                      <select id="vehicle" className="form-control" onChange={(e)=>{setWtype(e.target.value)}}>
                        <option value="Self-loading pistols" selected>Self-loading pistols</option>
                        <option value="Rifles and carbines">Rifles and carbines</option>
                        <option value="Sub-machine guns">Sub-machine guns</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="weaponNum">Weapon Lisence#</label>
                      <input type="text" id="lisence" className="form-control" name="lisence" disabled/>
                      <br></br>
                      <input type="button"  className="form-control"  onClick={generateLisence} value="Generate Lisence#"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="weaponNum">Date</label>
                      <input type="date" className="form-control" name="lisence" onChange={(e)=>{ var date1 = new Date(e.target.value);  var date2= date1.getTime()/1000; setDate(date2)}}/>
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
      );
}

export default WeaponLisence;