import { useLocation } from "react-router"

function Employee() {

const {state}=useLocation()



  return (
    <div className="text-center bg-white w-100 mx-auto h-60 shadow-2xl rounded-4xl">
      <h1 className="font-bold text-4xl py-5">Employee Details </h1>
      <p> Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
      <p>Designation: {state.designation}</p>
      <p>Company: {state.companyName}</p>
    </div>
  )
}

export default Employee