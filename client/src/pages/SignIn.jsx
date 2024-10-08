import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link  , useNavigate} from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { signInStart, signInSuccess , signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OA';



export default function SignIn() {

  const [formData , setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const dispatch= useDispatch();
  const navigate  = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill all the fields'));
    }

    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }

      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }

    }
    catch(error){
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col md:flex-row p-3 max-w-3xl mx-auto md:items-center gap-10'>
        {/* left side */}
        <div className='flex-1'>
        <Link to="/" className=' text-4xl font-bold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Kandy's
          </span>
          Blog
        </Link>   
        <p className='text-lg mt-5'>
          This is a demo project . You can sign in with your email an password 
          or with Google
        </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            
            <div className=''>
              <Label value='Your Email'></Label>
              <TextInput 
                type='email'
                placeholder='Email'
                id='email'
                onChange = {handleChange}
              />    
            </div>

            <div className=''>
              <Label value='Your Password'></Label>
              <TextInput 
                type='password'
                placeholder='Password'
                id='password'
                onChange = {handleChange}
              />    
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? 
                ( 
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
                ):
                (
                  'Sign In'
                )
              }
               
            </Button>
            <OAuth/>
          </form>

          <div className='flex gap-2 mt-5'>
            <span className='font-semibold'>
              Don't have an account? 
            </span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
