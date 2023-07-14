import axios from 'axios';
import React, { useState } from 'react'

const DeleteUser = (props) => {
    // const [name,setFirstName] = useState('');
    const [show,setShow]= useState(false);
    const [notFound,setNotFound]=useState(false);
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
         
          const response = await axios.delete(`/registration/${props.name}/${props.email}/${props.role}`, {
             
          });
    
          // Handle the response or perform any necessary actions
          if(response.data){
          console.log(response.data);
          setShow(true);
          }
          
          // Reset the form fields
          
        } catch (error) {
          setNotFound(true)
          console.log("Data Not Found ");
        }
      };



  return (
    <div className="container mt-3" style={{marginLeft:'0px'}} >
            <form onSubmit={handleDelete} >
                <div className="row jumbotron box8">
                    <div className="col-sm-12 mx-t3 mb-4">
                        <h1 className="text-center text-info" style={{ fontSize: '30px' }}>Delete User</h1>
                    </div>
                        {show && (<div style={{marginLeft:'400px',fontSize:'20px'}} > {props.name} User Deleted Successfully </div>)}
                        {notFound && (<div  style={{marginLeft:'400px',fontSize:'20px'}} ><h1> {props.name} User Not Found </h1></div>)}
                    <div className="col-sm-12 form-group mb-0">
                        <button className="btn btn-primary float-right" style={{ marginLeft: '520px', marginTop: '15px', marginBottom: '20px' }}  >Delete</button>
                    </div>
                  </div>
                </form>
              </div>
  )
}

export default DeleteUser
