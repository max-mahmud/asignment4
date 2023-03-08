import React from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import auth from '../FireBase/Firebase.init';
import './Githubsing.css'

const Githubsingup = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    if (error) {
        return (
          <div>
            <p className='git_p'>Something Wrong</p>
          </div>
        );
      }
      if (loading) {
        return <p className='git_p'>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p className='git_p'>User Registered</p>
          </div>
        );
      }
  return (
    <>
      <Button variant="primary" className='git_btn' type="submit" onClick={()=> signInWithGithub()}>Continue With Github</Button>
    </>
  )
}

export default Githubsingup
