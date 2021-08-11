import React from 'react';
import { useStore } from '../context/GlobalState';

function ShowCriminal() {

  const [{getCriminalRecord}] = useStore();
  console.log("all criminals = "+getCriminalRecord)

  return(

    <div class="container-fluid">
           {getCriminalRecord.map((obj) => {
   return(
    <table class="table">
<thead>
<tr>
  <th scope="col">CNIC</th>
  <th scope="col">Remarks</th>
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
  <td>{na.remarks}</td>
  <td>{day +"/"+month+"/"+year}</td>
</tr>
 })}
</tbody>
</table>
 )})}
</div>

    )
}
export default ShowCriminal;