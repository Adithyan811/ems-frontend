import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Admin() {
  //API fetching - to get all the employees details
  const base_url='http://localhost:8000/get-all-employees'

  //state creation
  const [allEmployees,setAllEmployees]=useState([])//to hold all employees details

  const fetchData=async()=>{
    const result = await axios.get(base_url)//details from the server
    console.log(result.data.employees);//object -> array of employees
    setAllEmployees(result.data.employees)
  }
console.log(allEmployees);
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      <h1 className='text-center text-primary m-4'>Employee Management System</h1>
      <div className="container">
        <p style={{textAlign:'justify'}}> An employee management system is a tool that companies use to organize their employee data and key functions within their HR department, including recruitment & onboarding, time and attendance tracking, performance management, training & development, payroll, and benefits administration. They are a type of workforce management tool that acts as a single source of truth for your HR professionals and employees alike.</p>
      </div>

     <Link to='/add'>
     <a className='btn btn-primary ' style={{float:'right',padding:'10px'}} href="">Add</a>

     </Link>
     
      <div className='container '>
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
       {
        allEmployees.map((item)=>(
          <tr>
          <td>
            {item.id}
          </td>
          <td>
            {item.name}
          </td>
          <td>
           {item.age}
          </td>
          <td>
            {item.designation}
          </td>
          <td>
            {item.salary}
          </td>
          <td>
            <div className='d-flex justify-content-evenly'>
            <i className='fa-solid fa-pen text-dark'></i>
            <i className='fa-solid fa-trash text-danger'></i>
            </div>
          </td>
        </tr>
        ))
       }
 
      </MDBTableBody>
    </MDBTable>
      </div>
    </div>
  )
}

export default Admin