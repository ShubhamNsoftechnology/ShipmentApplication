import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click
    console.log(`Clicked ${item}`);
  };

  return (
    <div>
      <button className="navbar-toggler" onClick={toggleDropdown}>
        Click me
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <button onClick={() => handleItemClick('Edit')}>Edit</button>
          <button onClick={() => handleItemClick('Delete')}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
