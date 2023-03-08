import React from 'react'
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../FireBase/Firebase.init';
import './GoogleSingup.css'

const GoogleSingup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p className='google_p'>Something Went Wrong</p>
          </div>
        );
      }
      if (loading) {
        return <p className='google_p'>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className='google_p'>Sing In SuccessFully</p>
          </div>
        );
      }
    
  return (
    <>
      <Button className='btn google_btn ' onClick={()=>signInWithGoogle()}>Continue With Google</Button>
    </>
  )
}

export default GoogleSingup
