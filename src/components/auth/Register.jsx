import React, {useState} from 'react';

export const Register = (props) => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[country, setCountry] = useState('');
    const[dateBirth, setDateBirth] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const handleRegisterForm = (e)=>{
        e.preventDefault ();
        console.log(firstName);
    }

    return(
    <div className='form-auth-container'> 
        <h2>Register</h2>
       <form className='register-form' onSubmit={handleRegisterForm}>
            {/* First Name */}
            <label htmlFor="firstName">FirstName</label>
            <input type="text" value={firstName} onSubmit={(e)=>setFirstName(e.target.value)} id='firstName' name='firstName'/>
                {/* LastName */}
            <label htmlFor="lastName">LastName</label>
            <input type="text" value={lastName} onSubmit={(e)=>setLastName(e.target.value)} id='lastName' name='lastName'/>
                {/* Country */}
            <label htmlFor="country">Country</label>
            <input type="text" value={country} onSubmit={(e)=>setCountry(e.target.value)} id='country' name='country'/>
                {/* DateOfBirth */}
            <label htmlFor="dateBirth">DateOfBirth</label>
            <input type="text" value={dateBirth} onSubmit={(e)=>setDateBirth(e.target.value)} id='dateBirth' name='dateBirth'/>
                {/* Password */}
            <label htmlFor="password">Password</label>
            <input type="text" value={password} onSubmit={(e)=>setPassword(e.target.value)} id='password' name='password'/>
                {/* Confirm Password */}
            <label htmlFor="confirmPassword"> ConfirmPassword</label>
            <input type="text" value={confirmPassword} onSubmit={(e)=>setConfirmPassword(e.target.value)} id='confirmPassword' name='confirmPassword'/>
                {/* Register Btn  */}
            <button type='submit' className='btn btn-primary'>Register</button> 
            {/* Another Statement */}
            <p>If you have an already Account. Please <button onClick={()=> props.onFormSwitch('login')} >Login</button> Here! </p>
       </form>
    </div>
    );
}

export default Register;