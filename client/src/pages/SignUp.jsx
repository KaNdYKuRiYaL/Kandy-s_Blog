import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex flex-col md:flex-row p-3 max-w-3xl mx-auto md:items-center gap-5'>
        {/* left side */}
        <div className='flex-1'>
        <Link to="/" className=' text-4xl  font-bold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
            Kandy's
          </span>
          Blog
        </Link>   
        <p className='text-md mt-5'>
          This is a demo project . You can sign up with your email an password 
          or with Google
        </p>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <form action='' className='flex flex-col gap-5'>
            <div className=''>
              <Label value='Your Username'></Label>
              <TextInput 
                type='text'
                placeholder='Username'
                id='Username'
              />    
            </div>

            <div className=''>
              <Label value='Your Email'></Label>
              <TextInput 
                type='text'
                placeholder='Email'
                id='Email'
              />    
            </div>

            <div className=''>
              <Label value='Your Password'></Label>
              <TextInput 
                type='text'
                placeholder='Password'
                id='Password'
              />    
            </div>

            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up  
            </Button>
          </form>

          <div className='flex gap-2 mt-5'>
            <span className='font-semibold'>
              Have an account? 
            </span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
