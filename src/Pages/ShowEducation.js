import { useStore } from '../context/GlobalState';

function ShowEducation() {

  const [{getEducation}] = useStore();
  console.log("allEducation = "+getEducation)

  // getEducation.map((obj) => {
  //     console.log("hello "+obj[0].prcentage)
  //  });

    return(
      <div class="container-fluid">
         {getEducation.map((obj) => {
   return(
      <table class="table">
<thead>
  <tr>
   
    <th scope="col">CNIC</th>
    <th scope="col">Subject</th>
    <th scope="col">Marks</th>
    <th scope="col">Percentage</th>
    <th scope="col">Grade</th>
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
    <td>{na.subject}</td>
    <td>{na.marks}</td>
    <td>{na.prcentage}</td>
    <td>{na.grade}</td>
    <td>{day+"/"+month+"/"+year}</td>
  </tr>
 })}
</tbody>
</table>
  )
})}
</div>
    )
}
export default ShowEducation;