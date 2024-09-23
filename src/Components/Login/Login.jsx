import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../Firebase/_firebase_init';
import { Link } from 'react-router-dom';

const auth =getAuth();
const Login = () => {
    const [success,setsuccess] = useState('');
    const [Error,setError] = useState('')

    const passref = useRef(null);
    const emailref = useRef(null);

    const handleReset=(e)=>{
      const email = emailref.current.value;
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('check your email')
      }).catch((err)=>{
        console.log(err.message);
      })
    }
  const   handleLoginSubmit= (e)=>{
        e.preventDefault();
const email = emailref.current.value;
const password =passref.current.value;
console.log(email, password);
setsuccess('');
setError('')

signInWithEmailAndPassword(auth,email,password)
.then(res => 
{    console.log(res.user)
    setsuccess('successfully logged in')
})
.catch(err => {
    console.log(err.message)
    setError(err.message);
})

    }
    return (
        
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input ref={emailref} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input ref={passref} type="password"  placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a onClick={handleReset} href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
{
    success && <p className='text-center text-green-800'>{success}</p>
}
{
    Error && <p className='text-center text-red-800'>{Error}</p>
}
<p className='text-center'>don't have account ? <Link className='font-semibold hover:underline' to='/signUp'>Registration</Link> here</p>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default Login;