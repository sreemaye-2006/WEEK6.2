import { useState, useEffect } from "react";
import { useLocation,useNavigate } from "react-router";
import axios from "axios";
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate=useNavigate();
const { state } = useLocation();
  const gotoEmployee=(empObj)=>{
    navigate("/employee",{state: empObj});
  };
  
  const gotoEditEmployee=(empObj)=>{
    navigate("/editEmployee",{state: empObj});
  };
const deleteEmpById=async(id)=>{
  let res= await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/emp-api/employees/${id}`)
  //get lateset emp data
  if (res.status===200){
    getEmps();
  }
} 
  async function getEmps() {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/emp-api/employees`);
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
 
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p className="md-4">{empObj.name}</p>
            <div className="flex justify-around">
              <button  onClick={()=>gotoEmployee(empObj)} className="bg-pink-200  p-2 rounded-2xl test-white ">View</button>
               <button  onClick={()=>gotoEditEmployee(empObj)}className="bg-pink-300 p-2 rounded-2xl test-white ">Edit</button>
               <button onClick={()=>deleteEmpById(empObj._id)} className="bg-pink-400 p-2 rounded-2xl test-white ">Delete</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;
