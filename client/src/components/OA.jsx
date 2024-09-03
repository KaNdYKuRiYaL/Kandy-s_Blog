import React from 'react';
import {Button} from 'flowbite-react';
import {AiFillGoogleCircle} from 'react-icons/ai'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {app} from '../firebase';
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom';


export default function OAuth() {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async()=>{
        
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt:'select_account'})
        try{
            const resultFromGoogle = await signInWithPopup(auth , provider);
            // console.log(resultFromGoogle);
            const res = await fetch('/api/auth/google',{
                method : 'POST',
                headers: {'Content-Type' : 'application/json'},
                body :JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email:resultFromGoogle.user.email,
                    googlePhotoUrl : resultFromGoogle.user.photoURL
                }),
            })
            const data = await res.json();
            if(res.ok){
                dispatch(signInSuccess(data));
                navigate('/');
            }
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        <Button type='button' className='min-w-full' gradientDuoTone='pinkToOrange' outline
        onClick={handleGoogleClick}
        >
            <AiFillGoogleCircle className='w-6 h-6 ' />
            Continue with Google
        </Button>     
    </div>
  )
}
