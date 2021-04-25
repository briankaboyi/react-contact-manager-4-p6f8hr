import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    function addPerson(name, age, location) {
      setContacts([...contacts, { name: name, age: age, location: location }]);
    }
    return (
      <div className="manager">
        <h1>Contact Manager</h1>
        <AddPersonForm handleSubmit={addPerson} />
        <hr
          style={{
            background: "var(--dark)",
            color: "var(--dark)",
            height: "1px",
            width: "85%",
            margin: "0px auto",
          }}
        />
        <PeopleList data={contacts} />
      </div>
    );
  }
  
  function AddPersonForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
  
    function handleName(e) {
      setName(e.target.value);
    }
    function handleAge(e) {
      setAge(e.target.value);
    }
    function handleLocation(e) {
      setLocation(e.target.value);
    }
    function handleSubmit(e) {
      if (name == "" || age == "" || location == "") {
        return false;
      } else {
        props.handleSubmit(name, age, location);
      }
  
      setName("");
      setAge("");
      setLocation("");
      e.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Add name"
          onChange={handleName}
          value={name}
        />
        <input
          type="number"
          minimum="1"
          placeholder="Add age"
          onChange={handleAge}
          value={age}
        />
        <input
          type="text"
          placeholder="Add location"
          onChange={handleLocation}
          value={location}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
  
  function PeopleList(props) {
    const arr = props.data;
  
    const listItems = arr.map((val, index) => (
      <li className="list-item" key={index}>
        <p className="name"> {val.name}</p>
        <p className="age">Age {val.age} </p>
        <p className="location"> {val.location}</p>
      </li>
    ));
  
    return (
      <div className="list">
        <h2>Contact List</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
  const contacts = [
    { name: "James", age: 13, location: "Nairobi" },
    { name: "Thomas", age: 14, location: "Tanzania" },
    { name: "Bruce", age: 15, location: "Uganda" },
  ];
  ReactDOM.render(
    <ContactManager data={contacts} />,
    document.getElementById("root")
  );