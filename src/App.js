import React, { useState, useEffect, useCallback } from "react";
import  GoogleLogin  from 'react-google-login';
 import FacebookLogin from 'react-facebook-login-typed';
import { FaFacebookSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

// desctructuring Props
 const App = () => {
  const [increment, setIncrement] = useState(0);
 


  const add = () => {
    setIncrement(increment + 1);
  };

  // this one for google api
  const responseGoogle = (response) => {
     console.log("what is response?? ", response);
  }

  const onErrorHere = (response) => {
     console.log('what is the error', response);
  }

   const responseFacebook = useCallback((response) => {
      console.log('this was click')
      if(response.status !== "unknown") {
         console.log('successfull call', response)
      }
   },[])


   // define this to use facebook logout
   // window.fbAsyncInit = () => {
   //    window.FB.init({
   //       appId: "APPIDHERE",
   //       cookie: true,
   //       xfbml: true,
         
   //    })
   // }

   // call this function to logout
   // const facebookLogout = () => {
   //    window.FB.logout(() => {
   //       console.log('person logged out');
   //    })
   // }

   

  return (
    <div>
        <GoogleLogin
    clientId={`${process.env.REACT_APP_API_GOOGLE_ID}`}
    buttonText="Login with google"
    onSuccess={responseGoogle}
    onFailure={onErrorHere}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}
    render={(renderProps) => (
       <button onClick={renderProps.onClick}>custom google button</button>
    )}
  />
      <FacebookLogin 
      appId={`${process.env.REACT_APP_API_FACEBOOK_ID}`}
      autoLoad={false}
      // fields="name,email,picture"
      callback={responseFacebook}
      
      render={(renderProps) => (
         <button className="facebook"  onClick={renderProps.onClick}>facebook custom button</button>
      )}
    />

    <span className="icon">
 <FaFacebookSquare />

    </span>
   <ImFacebook2 />
      <input type="text" />
      <p>{`count starts at: ${increment}`}</p>
      <button onClick={add}>add</button>
    </div>
  );
};

export default App;