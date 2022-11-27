import {useState} from 'react';

export const Login = (props)=> {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) =>{
    e.preventDefault ();
    console.log(email);
   }

   return(
    <form onSubmit={handleSubmit}>
    {/* Email */}
       <label htmlFor="email">Email</label>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Please Enter Your Email' name='email' id='email' />
    {/* Password */}
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" id="password" />
    {/* Submit Btn */}
        <button type='submit' className='btn btn-primary'>Login</button>
    {/* another Statement */}
        <p>if you don't have an account <button onClick={()=> props.onFormSwitch('register')} >Register</button> Here! </p>
   
    </form>
    
   )

}

export default Login;