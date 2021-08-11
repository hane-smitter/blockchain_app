import React,{useState} from 'react';
import { useStore } from '../context/GlobalState';
import { AddEducation } from '../store/asyncActions';
import Loader from '../images/loader.gif';


function Educations(){
  
    const [getView,setView] = React.useState(0); 
   
    const[cnic,setcnic] = useState("")
    const[subject,setsubject] = useState("")
    const[marks,setmarks] = useState(0)
    const[percentage,setpercentage] = useState(0.00)
    const[grades,setgrade] = useState("")
    const[date,setdate] = useState(0)

    const [{contract, accounts}, dispatch] = useStore();
    const [isTransactionInProcess, setTransactionInprocess] = useState(false);
    const [isTransactionSuccessful , setTransactionSuccessful] = useState(true);
    const [transactionError , setTransactionError] = useState("");
        
  
    const initialState = {
         marks1: '',
         marks2: '',
         marks3: '',
         marks4: '',
         marks5: '',
         marks6: '',
         marks7: '',
    }

    const [getMarks,setMarks] = React.useState(initialState);


    const Calculation = (e) => {
       e.preventDefault();
       const total = Number(getMarks.marks1)+Number(getMarks.marks2)+Number(getMarks.marks3)+Number(getMarks.marks4)+Number(getMarks.marks5)+Number(getMarks.marks6)+Number(getMarks.marks7);
       document.getElementById("total").value = total;
       setmarks(total)
       const percent = parseFloat(((total * 100) / 700).toFixed(0)); 
       document.getElementById("percent").value = percent;
      setpercentage(percent)  
       if(percent >= 80.00 && percent <= 100.00){
         document.getElementById("grade").value = "A+";
        setgrade("A+")
       }
       
      else if(percent >= 70.00 && percent < 80.00){
        document.getElementById("grade").value = "A";
        setgrade("A")
      }
      
      else if(percent >= 60.00 && percent < 70.00){
        document.getElementById("grade").value = "B";
        setgrade("B")
      }
      
      else if(percent >= 50.00 && percent < 60.00){
        document.getElementById("grade").value = "C";
        setgrade("C")
      }
      
      else if(percent >= 40.00 && percent < 50.00){
        document.getElementById("grade").value = "D";
        setgrade("D")
      }

      else{
        document.getElementById("grade").value = "Fail";  
        setgrade("Fail")
      }
    } 
  
   const handleSubmit = async () => {
        console.log(cnic)
        console.log(subject)
        console.log(marks)
        console.log(grades)
        console.log(percentage)
        console.log(date)

        setTransactionSuccessful(true);
        setTransactionError("");
    
        try {
          setTransactionInprocess(true)
          const newTransaction = {
            cnic : cnic,
            subject : subject,
            marks : marks,
            percentage: percentage,
            grade:grades,
            date:date
          }
          await AddEducation(contract, accounts,newTransaction, dispatch);
          
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
       <div>

    
        <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6">
            <div className="card card-primary">
              <div className="card-header">
                <h4>SSC & HSC Certificate</h4>
              </div>
              <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="cnic">Enter CNIC#</label>
                    <input type="text" className="form-control" name="cnic" onChange={(e)=> setcnic(e.target.value)} />
                  </div>
                
                  
                  <div className="form-group">
                      <label htmlFor="city">Subject</label>
                      <select id="subject" className="form-control" onChange={(e) => setsubject(e.target.value)} >
                 <option value="SSC" selected>SSC</option>
                 <option value="HSC" selected>HSC</option>
                </select>
                      </div>
     
                  <div className="form-group">       
                    <label htmlFor="weaponNum">Marks</label>
                  </div>
     
                  <div className="form-group">
                  &nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">English1</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks1:e.target.value})}} value={getMarks.marks1}/>  / 100
                  </div>
                  <div className="form-group">
                  &nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">English2</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks2:e.target.value})}} value={getMarks.marks2}/>  / 100
                  </div>
                  <div className="form-group">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">Urdu</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks3:e.target.value})}} value={getMarks.marks3}/>  / 100
                  </div>
                  <div className="form-group">
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">Maths</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks4:e.target.value})}} value={getMarks.marks4}/>  / 100
                  </div>
                  <div className="form-group">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">Physics</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks5:e.target.value})}} value={getMarks.marks5}/>  / 100
                  </div>
                  <div className="form-group">
                  &nbsp;&nbsp; <label htmlFor="weaponNum">Chemistry</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks6:e.target.value})}} value={getMarks.marks6}/>  / 100
                  </div>
                  <div className="form-group">     
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="weaponNum">P.ST</label>
                    &nbsp;&nbsp;
                    <input type="number" style={{width:'60px'}} onChange={(e)=>{setMarks({...getMarks,marks7:e.target.value})}} value={getMarks.marks7}/>  / 100
                  </div>
     
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg" onClick={Calculation}>
                      Calculate
                    </button>
                  </div>
     
                  <div className="form-group">     
                 <label htmlFor="weaponNum">Total Marks</label>
                    &nbsp;&nbsp;
                    <input type="number" id="total" style={{width:'100px'}} disabled/>  / 700
                  </div>
                  
                  <div className="form-group">     
                  &nbsp;&nbsp;&nbsp;
                 <label htmlFor="weaponNum">Percent%</label>
                    &nbsp;&nbsp;
                    <input type="number" id="percent" style={{width:'100px'}} disabled/> 
                  </div>
     
                  <div className="form-group">     
                  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <label htmlFor="weaponNum">Grade</label>
                    &nbsp;&nbsp;
                    <input type="text" id="grade" style={{width:'100px'}} disabled/> 
                  </div>
                  
                  <div className="form-group">
                  <input type="date" className="form-control"  onChange={(e)=> {var date1 = new Date(e.target.value);  var date2= date1.getTime()/1000; setdate(date2) }}/> 
                  </div>

                  <div className="form-group">
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>
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
     
</div>
   )

}
export default Educations;