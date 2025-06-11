import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import OfferLetterForm from './components/OfferLetterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MITS Internship Portal</h1>
      <ApplicationForm />
      <hr />
      <OfferLetterForm />
    </div>
  );
}

export default App;
