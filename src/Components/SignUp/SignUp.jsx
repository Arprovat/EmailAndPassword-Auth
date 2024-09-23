import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
 import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';
import app from '../../Firebase/_firebase_init';

const auth = getAuth(app);
const SignUp = () => {
    const [UppercaseError ,setUppercaseError] = useState('')
 
    const handelFrom=(e)=>
    {
        e.preventDefault();
        const name = e.target.name.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
        setUppercaseError('')
         if(!/[A-Z]/.test(password)){
setUppercaseError('must be at least one Uppercase character ');
           return;

         }
         console.log(email,password)
        
         createUserWithEmailAndPassword(auth,email,password)
         .then((res)=>{
            console.log(res.user);
            updateProfile(res.user,{displayName:name})
            .then()
            .catch(err =>{
               console.log(err.message);
            })
    
            sendEmailVerification(res.user)
            .then(()=>{
                alert('Check you Email and verify your Email');
            })
            toast.success('successfully registered!',{
                position:'top-center'
            })

         })
         .catch(err =>{
            console.log(err.message)
            toast.error(err.message,{
                position:'bottom-center'
            })
         })
       
    }
    return (
        <div>

        <div className='w-full min-h-screen bg-gray-200'>
            <h1 className='mb-5 text-5xl font-bold leading-normal text-center'>Register Here!</h1>
            <form onSubmit={handelFrom} className='mx-auto  border-slate-600 md:w-1/2 '>
                 <label className='my-5 ml-3 font-semibold appearance-none' htmlFor='name'>NAME</label><br />
                <input  className='mb-5 py-2 px-4 w-full rounded-xl' type="text" name='name'  placeholder='Name'/>
                <br />
                <label className='mb-2 ml-3  font-semibold' htmlFor='name'>Email</label><br />
                <input className='mb-5 py-2 px-4 w-full rounded-xl' type="email" name="email" required placeholder='Email' />
                <br />
                <label className='mb-2 ml-3 font-semibold' htmlFor='name'>Password</label><br />
                <input className='mb-5 py-2 px-4 w-full rounded-xl' type="password" name="password" required placeholder='Password'/>
                <br />
                <input  className='mt-4 py-3 bg-green-500 rounded-full w-full' type="submit" value="Submit" />
           
            {UppercaseError && <p className='mt-4 text-center text-lg'>{UppercaseError}</p>}
            <p className='text-lg text-center mt-4'>Already have account! please <Link className='text-xl font-semibold hover:underline ' to='/login'>Login</Link></p>
            </form>
            


        </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;