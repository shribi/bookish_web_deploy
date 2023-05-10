import './App.css';
import React from 'react';
import Header from "./Header";
import AppContact from "./AppContact";
//import ContactList from "./ContactList";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AppContact />
      {/* <ContactList /> */}
    </div>
  );
};

export default App;
