import React, { useState } from 'react';
import axios from 'axios';
import DisplayEmployee from './components/DisplayEmployee';

function App() {
  const [employee, setEmployee] = useState(null);

  const getEmployee = () => {
    axios.get('https://randomuser.me/api?nat=en').then((response) => {
      setEmployee(response.data.results[0]);
    });
  };

  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default App;
