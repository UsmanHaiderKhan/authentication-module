import {useState} from 'react';
import NavBar from './NavBar';

export const Login = (props)=> {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) =>{
    e.preventDefault ();
    console.log(email);
   }

   return(

    <div className="form-auth-container">
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
        {/* Email */}
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Please Enter Your Email' name='email' id='email' />
        {/* Password */}
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" id="password" placeholder='*******'/>
        {/* Submit Btn */}
            <button type='submit' className='btn btn-log'>Login</button>
        {/* another Statement */}
            <p className='mt-4'>if you don't have an account <button className='btn btn-primary btn-sm' onClick={()=> props.onFormSwitch('register')} >Register</button> Here! </p>
    
        </form>
    </div>
   )

}

export default Login;