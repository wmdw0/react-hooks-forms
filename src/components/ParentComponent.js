import React, { useState } from "react";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  return (
    <div>
      <Form handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange} firstName={firstName} lastName={lastName}/>
    </div>
  );
}

export default ParentComponent;
