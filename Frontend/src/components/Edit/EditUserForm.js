import React, { useState } from 'react';
import axios from 'axios';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const EditRegistrationForm = (props) => {
  const [name, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress] = useState('');
  const [role, setRole] = useState('');
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true);
  console.log(props.name);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("hii");
    try {
      // Make an API call to update the registration data
      const response = await axios.put(`/registration/${props.name}/${props.email}/${props.role}`, {
        name,
        lastName,
        email,
        phone,
        address1,
        role
      });
      setShow(true);
      setHide(false);

      // Handle the response or perform any necessary actions
      console.log(response.data);
      // Reset the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setRole('');
    } catch (error) {
      // Handle error responses
      // console.log(props.props);
      console.log("Data Not Found ");
    }
  };

  return (
    <div className="container mt-3" style={{ marginLeft: '0px' }} >
      {show && (
        <div id="reg"> User Information Updated Successfully. </div>
      )}
      {hide && (<form onSubmit={handleSubmit} >
        <div className="row jumbotron box8">
          <div className="col-sm-12 mx-t3 mb-4">
            <h1 className="text-center text-info" style={{ fontSize: '30px' }}>Edit Details</h1>
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="name-f">First Name</label>
            <input type="text" className="form-control" name="fname" id="name-f" placeholder="Enter the Name"
              value={name}
              onChange={e => setFirstName(e.target.value)} required />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="name-l">Last name</label>
            <input type="text" className="form-control" name="lname" id="name-l" placeholder="Enter your last name." value={lastName}
              onChange={e => setLastName(e.target.value)} required />

          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email." value={email}
              onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="address-1">Address Line</label>
            <input type="address" className="form-control" name="Locality" id="address-1" placeholder="Address" value={address1}
              onChange={e => setAddress(e.target.value)} required />
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="address-2">Phone</label>
            <input type="address" className="form-control" name="address" id="address-2" placeholder="Enter Phone" value={phone}
              onChange={e => setPhone(e.target.value)} required />
          </div>
          <div className="col-sm-4 form-group">
            <label htmlFor="State">Role</label>
            <input type="address" className="form-control" name="State" id="State" placeholder="Enter Role" value={role}
              onChange={e => setRole(e.target.value)} required />
          </div>
          <div className="col-sm-12 form-group mb-0">
            <button className="btn btn-primary float-right" style={{ marginLeft: '520px', marginTop: '15px', marginBottom: '20px' }}  >Update</button>
          </div>
        </div>
      </form>
      )}
    </div>


  )

};

export default EditRegistrationForm;
