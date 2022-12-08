import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Footer from '../components/Footer';

const AdminRegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] =  useState('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState ('');
    const [confirmation, setConfirmation] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitInfo = () => {
        dispatch({
            type: 'SubmitInfo',
            payload: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                contactNumber: contactNumber
            }});
            alert(`${firstName} has been added`);
            navigate('/admin-login-page')
    }

    return(
        <div>
              <form onSubmit = {(e) => {
                e.preventDefault();
            }}>
                <label>First Name:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                />
                <br /> <br />

                <label>Last Name:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                />
                <br /> <br />

                <label>Email:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <br /> <br />

                <label>Password:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <br /> <br />

                <label>Contact Number:</label> <br /> &nbsp;
                <input
                    required
                    type = 'search'
                    value = {contactNumber}
                    onChange = {(e) => setContactNumber(e.target.value)}
                />
                <br /> <br /> 

                <button 
                    type = 'submit'
                    onClick = {(e) => {
                        e.preventDefault();
                        submitInfo();
                        setConfirmation(!confirmation);
                    }}
                        >Register</button>
                <div className = 'Button-container'>
                    <button className = 'Back-button'
                        onClick = {() => navigate(-1)}
                        >BACK
                    </button>
                </div>
            </form>

            < Footer />
        </div>
    )
}

export default AdminRegisterPage;
