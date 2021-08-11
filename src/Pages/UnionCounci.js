import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { AddUnionCouncil } from '../store/asyncActions';
import Loader from '../images/loader.gif';

function UnionCouncil(){

  const[name,setname] = useState("")
 // const[cnic,setcnic] = useState("")
  const[fname,setfname] = useState("")
  const[mname,setmname] = useState("")
  const[fcnic,setfcnic] = useState("")
  const[mcnic,setmcnic] = useState("")
  const[gender,setgender] = useState("")
  const[dob,setdob] = useState(0)
  const[city,setcity] = useState("Karachi") 

 const [{contract, accounts,getCouncilArray}, dispatch] = useStore();
 const [isTransactionInProcess, setTransactionInprocess] = useState(false);
 const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
 const [transactionError , setTransactionError] = useState("");
 const [cnic22, setCnic22] = useState("") 
 var complete_cnic="";
 const generateCnic = () =>{
  var newcnic = "";
  var cnic = getCouncilArray.map((obj) => obj.map((na) =>
     newcnic =  na.cnic));
  //document.getElementById("cnic").value = cnic;
  //console.log(""cnic)
  console.log(newcnic)
  //console.log(length)
var  val1 ="";
var val2 ="";
var val3  ="";
var i;
for(i = 0; i<newcnic.length; i++){
	var alpha="";
	if(i<6)
	{
		alpha=newcnic.charAt(i);
		val1= val1.concat(alpha); 
	}
	else if(i>=6 && i < 13)
	{
		alpha=newcnic.charAt(i);
		val2= val2.concat(alpha); 
	}
	else{
		alpha=newcnic.charAt(i);
		val3= val3.concat(alpha); 
	}
}
// now  generating new cnic by increment of 1 in val2
val2=parseInt(val2);
val2=val2+1;
val2=val2.toString();
complete_cnic=complete_cnic.concat(val1);
complete_cnic=complete_cnic.concat(val2);
complete_cnic=complete_cnic.concat(val3);
document.getElementById("cnic").value = complete_cnic
setCnic22(complete_cnic)
//all variable printed
//console.log(cnic)
//console.log(val1);
//console.log(val2);
//console.log(val3);
console.log(complete_cnic);
}
    const handleSubmit  = async () => {

  
      console.log(name)
      console.log(complete_cnic)
      console.log(fname)
      console.log(mname)
      console.log(fcnic)
      console.log(mcnic)
      console.log(gender)
      console.log(dob)
      console.log(city)

      setTransactionSuccessful(true);
    setTransactionError("");

    try {
      setTransactionInprocess(true)
      const newTransaction = {
        name : name,
        cnic : cnic22,
        f_name : fname,
        m_name : mname,
        f_cnic: fcnic,
        m_cnic: mcnic,
        gender: gender,
        dob: dob,
        city: city
      }
      await AddUnionCouncil(contract, accounts,newTransaction, dispatch);
      
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
                  <h4>Union Council</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" name="name" required onChange={(e) => setname(e.target.value)}/>
                   </div>
                    <div className="form-group">
                      <label htmlFor="cnic">CNIC</label>
                      <input type="text" id="cnic" className="form-control" name="cnic" disabled/>
                      <br></br>
                      <input type="button"  className="form-control"  onClick={generateCnic} value="Generate Cnic"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="fathername">Father Name</label>
                      <input type="text" className="form-control" name="fathername" onChange={(e) => setfname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mothername">Mother Name</label>
                      <input type="text" className="form-control" name="mothername" onChange={(e) => setmname(e.target.value)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="fathercnic">Father CNIC</label>
                      <input type="text" className="form-control" name="fathercnic" onChange={(e) => setfcnic(e.target.value)}/>
                    </div> 
                    <div className="form-group">
                      <label htmlFor="mothercnic">Mother CNIC</label>
                      <input type="text" className="form-control" name="mothercnic" onChange={(e) => setmcnic(e.target.value)}/>
                    </div>

                    <div className="form-group">
                <label htmlFor="cnic">Gender </label>
                <br/>
                    <div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" value="Male" class="form-check-input" name="optradio" onChange={(e) => setgender(e.target.value)}/>Male
  </label>
</div>
<div class="form-check-inline">
  <label class="form-check-label">
    <input type="radio" value="Female" class="form-check-input" name="optradio" onChange={(e) => setgender(e.target.value)}/>Female
  </label>
</div>
</div>

          <div className="form-group">
                      <label htmlFor="dateOFBirth">Bate Of Birth</label>
                      <input type="date" className="form-control" name="mothercnic" onChange={(e) => {var date1 = new Date(e.target.value);  var date2= date1.getTime()/1000; setdob(date2)}}/>
                    </div>
                 
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <select id="city" className="form-control" onChange={(e) => setcity(e.target.value)} >
                 <option value="Karachi" selected>Karachi</option>
                 <option value="Hyderabad">Hyderabad</option>
                <option value="Multan">Multan</option>
                <option value="Lahore" >Lahore</option>
                </select>
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

export default UnionCouncil;