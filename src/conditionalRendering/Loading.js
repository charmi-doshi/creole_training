import React, { useEffect, useState } from "react";
import { PushSpinner } from "react-spinners-kit";

function Loading() {
  const [logIn, setLogIn] = useState(false);

  const handleClick = () => {
    console.log(logIn)

    if(logIn === false){
        setLogIn(true);
    }
    else{
        setLogIn(false);
    }
  };
  return (
    <>
      <button onClick={handleClick}>LogIn</button>
      {logIn ? (
        <>
          {/* <PushSpinner size={30}
                color="#686769"
                loading={load}/> */}
          <h2>You are Logged In</h2>
        </>
      ) : (
        <>
          <h2>You are Logged Out</h2>
        </>
      )}
    </>
  );
}

export default Loading;
