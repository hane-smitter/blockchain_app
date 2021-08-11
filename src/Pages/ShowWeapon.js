import { useStore } from '../context/GlobalState';


function ShowWeapon() {

  const [{getWeaponLisence}] = useStore();
  console.log("all weapon = ",getWeaponLisence)

  return(
      <div class="container-fluid">
         {getWeaponLisence.map((obj) => {
   return(
      <table class="table">
<thead>
  <tr>
    <th scope="col">CNIC</th>
    <th scope="col">Weapon type</th>
    <th scope="col">Lisence #</th>
    <th scope="col">Status</th>
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
    <td>{na.weapon_type}</td>
    <td>{na.lisence_no}</td>
    <td>{na.status}</td>
    <td>{day +"/"+month+"/"+year}</td>
  </tr>
 })}
</tbody>
</table>
   )})}
</div>
    )
}
export default ShowWeapon;