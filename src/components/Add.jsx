import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

function Add() {
  const [id,setId]=useState("")
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [designation,setDesignation]=useState("")
  const [salary,setSalary]=useState("")

const addEmployee=async(e)=>{
  //add employee - Api call
  console.log(id,name,age,designation,salary);

}
  return (
    <div>
      <div className="container text-center m-3">
        <h2 className='m-4 p-4'>Add Employee</h2>
        <MDBInput label='ID' onChange={(e)=>setId(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Name' onChange={(e)=>setName(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Age' onChange={(e)=>setAge(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} id='form1' type='text' />
        <br />

        <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} id='form1' type='text' />
        <br />
        <div>
          <button className='btn btn-success m-3' onClick={(e)=>addEmployee(e)}>Add<i class="fa-solid fa-user-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

export default Add