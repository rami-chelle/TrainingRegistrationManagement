import {  useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const adminCredentials = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8111/api/v1/auth/login',
        {email: username, password: password}
      ).then (result => 
        {
          // console.log(result)
          navigate ('/trainingpage');
        })
      }

    return (
      <div className = 'Admin-Login-container'>
        <form className = 'Admin-form-container'>
          
        <label>Username:</label> &nbsp;
        <input className = 'Admin-input-container'
          type = 'text'
          value = {username}
          placeholder = 'Input valid username here...' 
          onChange = {(e) => setUsername(e.target.value)}
          required
        />
        
        <br /> 

        <label>Password:</label> &nbsp;
        <input className = 'Admin-input-container'
          type = 'password'
          value = {password}
          placeholder = 'Input valid password here...' 
          onChange = {(e) => setPassword(e.target.value)}
          required        
        />

        <br />

        <div className = 'Button-container'>
          <button className = 'Login-button'
            onClick = {adminCredentials}
          >LOGIN</button>
        </div>

        <div className = 'Button-container'>
          <button className = 'Back-button'
            onClick = {() => navigate(-1)}
          >BACK</button>
        </div>
      </form>

      < Footer />
      </div>
      
    )

};
  
export default AdminLoginPage;

