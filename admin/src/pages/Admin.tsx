import React, { useEffect, useState } from 'react'
import { User } from '../types/admin'

export default function Admin() {
  const [users,setUsers]=useState<User[]>([])


  useEffect(()=>{
         const GetUsers=async()=>{
          try {
            const response = await fetch("http://localhost:5000/api/admin/getuser", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                }
              });
              const data = await response.json();
                if (response.status===200) {
                   setUsers(data.users)
                }
                 
          } catch (error) {
              console.log(error)
          }
         }
         GetUsers()
  },[])

//   const handleDelet=async(id)=>{
//        try {
//             const request=await deleteUser(`/api/admin/delet/${id}`)
//             const response=request.data
//             if (request.status===200) {
//               toast.success(response.message)
//               console.log(response)
//             }
//        } catch (error) {
//           if (error.response) {
//             toast.error(error.response.data.message)
//           }
//        }
//   }
  return (
    <>
      <div className='admin-container'>
        <h2>Mange Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
            {users && users.map((elem,index)=>{
              return(
                <tr key={index}>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                {/* <td>
                  <button    onClick={()=>handleDelet(elem._id)}>Delete</button>
                </td> */}
              </tr>
              )
            })}
              
            </tbody>
        </table>
      </div>
    </>
  )
}