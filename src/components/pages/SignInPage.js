import React from 'react';
import { fetchUser } from '../../fetchData';
import Layout from '../layout/Layout';
import { useDispatch } from 'react-redux';
import { SIGN_IN_ACTION } from '../../reduxStore';
import { useSelector } from 'react-redux';

const SignInPage = () => {

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const handleUserLogin = () => fetchUser('fakeuser@mail.com', '123')
    .then(data => dispatch(
      {
        type: SIGN_IN_ACTION, 
        payload: {userData: data}
    }))
    .catch(e => console.log(e))

  if(user){
    return(
      <Layout>
        <h1>Welcome Back, {user.firstName}</h1>
      </Layout>
    )
  }else{
    return (
      <Layout>
        <h1>Sign In page</h1>
        <button onClick={handleUserLogin}>Login</button>
      </Layout>
    )
  }
  
};

export default SignInPage;
