import React, { useState } from 'react';
import '../../style.css';
import EditRegistrationForm from '../Edit/EditUserForm';
import ViewOrder from '../ViewOrder/ViewOrder';
import DeleteUser from '../Delete/DeleteUser';

function User() {
  const [showInputField, setShowInputField] = useState(false);
  const [name, setName] = useState('');
  const [email,setEmail]=useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showViewForm, setViewForm] = useState(false);
  const [showDeleteForm, setDelete] = useState(false);
  const [role,setRole]= useState('');
  
  console.log(role);
  const handleUserManagementClick = () => {
    setShowInputField(!showInputField);
    setShowDropdown(false);
    setShowEditForm(false);
    setDelete(false);
    setViewForm(false);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowEditForm(false); // Close the edit form when toggling the dropdown
    setViewForm(false);
    setDelete(false);
  };

  const handleEditClick = () => {
    setShowEditForm(true);
    console.log(name);
    setShowDropdown(false);
  };
  const handleViewClick = () => {
    setViewForm(true);
    setShowDropdown(false);
  };
  

  const handleDeleteClick = () => {
    console.log('Delete button clicked');
    setDelete(true);
    setShowDropdown(false);
  };
  

  const handleFormClose = () => {
    setShowEditForm(false);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };

  const handleViewClose = () => {
    setViewForm(false);
  };
  

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" id="navbar">
          <button className="btn btn-outline-success" id="btn" type="button" onClick={handleUserManagementClick}>
            User Management
          </button>
          <button className="btn btn-sm btn-outline-secondary" id="btn" type="button">
            Deactivate Management
          </button>
        </form>
      </nav>

      {showInputField && (
        <div id="inp1">
          <label htmlFor="userInput" id="label" placeholder="Enter the Name">Name</label>
          <input type="text" placeholder="Enter the name" autoFocus value={name} onChange={handleInputChange} id="userInput" />
          
          <label htmlFor="userInput" id="label">Email</label>
          <input type="email" placeholder="Enter the Email" value={email} onChange={e => setEmail(e.target.value)} id="userInput" />
          
          {/* <label htmlFor="userInput" id="label">Role</label>
          <input type="text" placeholder="Enter the Role" value={role} onChange={e => setRole(e.target.value)} id="userInput" /> */}
            <label htmlFor="userInput" id="label">Role </label>
            <select class="col-sm-1.5" id="sel" aria-label="Default select example" value={role} onChange={e => setRole(e.target.value)}>
              <option selected>Select</option>
              <option value="Delivery-Person">Delivery Person</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>          



          {/* <nav className="navbar navbar-dark bg-light" id="nav"> */}
            <button id="dot" className="navbar-toggler" type="button" onClick={toggleDropdown}>
              <span className="navbar-toggler-icon">...</span>
            </button>
            {showDropdown && (
              <div className="dropdown-content" id="drp">
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleDeleteClick}>Delete</button>
                <button onClick={handleViewClick}  >View Order</button>
              </div>
            )}
            {/* </nav> */}
         
        </div>
      )}

      {showEditForm && <EditRegistrationForm name={name} email={email} role={role} onClose={handleFormClose} />}
      {showViewForm && <ViewOrder name={name} email={email} role={role} onClose={handleViewClose} />}
      {showDeleteForm && <DeleteUser name={name} email={email} role={role} onClose={handleDeleteClose} />}
     
    </div>
  );
}

export default User;
