import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate('');
    const firstName = useRef('');
    const lastName = useRef('');
    const age = useRef('');
    const email = useRef('');
    const contactNumber = useRef('');
    const address = useRef('');


    const handleSubmit= async (e)=>{
        e.preventDefault();
        const trainee = {
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            age:age.current.value,
            email:email.current.value,
            contactNumber:contactNumber.current.value,
            address:address.current.value
        }
        alert(`Trainee has been added`);

        try {
            const response = await axios.post('http://localhost:8111/api/v1/trainee', trainee);
            if(response.status === 200){
                response.send({status: 'Student has been added successfully'});
                setTimeout(()=>{
                    navigate('/trainingpage');
                }, 200)
            }
            else{
                //({message: 'Some error occurred please try again'});
            }
        } catch (error) {
            console.log(error);
            //({message: 'Trainee with these details has been enrolled before'});
        }
    }
  return (
    <div className="trainee-container">
        <div className="trainee-main-section">
            <div className="trainee-text-section">
                <div className="trainee-title">
                    <h2>Trainee registration Page</h2>
                </div>
                <div className="trainee-signup-container">
                    <div className="trainee-signup">
                        <div className="trainee-signup-form">
                            <form onSubmit={handleSubmit}>
                                <input type="text" placeholder="First Name" ref={firstName}/>
                                <input type="text" placeholder="Last Name" ref={lastName}/>
                                <br/>
                                <input type="text" placeholder="Age" ref={age}/>
                                <input type="email" placeholder='Email' ref={email}/>
                                <br/> 
                                <input type="text" placeholder="Contact Number" ref={contactNumber}/>
                                <br/>

                                <textarea placeholder='Enter Your Address' ref={address}></textarea>
                                <div className="sign-sec">
                                    <input type="submit" value="Register"/>
                                </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;