import './App.css';
import {useState} from 'react'

import {Login} from './components/auth/Login';
import {Register} from './components/auth/Register';
import NavBar from './components/auth/NavBar';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm (formName);
  }


  return (
    <div>
      <NavBar />
      <div className='App'>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>
    </div>
  );
}

export default App;
