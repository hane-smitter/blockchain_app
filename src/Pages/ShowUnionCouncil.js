import { useStore } from '../context/GlobalState';

function ShowUnionCouncil() {

  const [{getCouncilArray}] = useStore();

   console.log(getCouncilArray);
    
    getCouncilArray.map((obj) => {
    
    console.log("hello "+obj[1].name)
   });
  
  
    return(
    
      <div class="container-fluid">
         {getCouncilArray.map((obj) => {
   return(
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
 
   
     {obj.map( (na) => {
      
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
        <td>{day +"/"+month+"/"+year}</td>
        <td>{na.city}</td>
        </tr>
      
     })}
 
  </tbody>

</table>
   )
})}

</div>
     
      
    )
      
}
export default ShowUnionCouncil;