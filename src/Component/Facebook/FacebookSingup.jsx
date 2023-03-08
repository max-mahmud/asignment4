import React from 'react'
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { FaFacebook } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import './Facebooksing.css'
import auth from '../FireBase/Firebase.init';


const FacebookSingup = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    if (error) {
        return (
          <div>
            <p className="fb_p">Something Went Wrong</p>
          </div>
        );
      }
      if (loading) {
        return <p className="fb_p">Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className="fb_p">User Registered</p>
          </div>
        );
      }
  return (
    <>
      <Button  className='fb_btn btn' type="submit" onClick={()=> signInWithFacebook()}>Continue With Facebook</Button>
    </>
  )
}

export default FacebookSingup
