import React, { useState } from 'react'

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () => { setIsLoggedIn(true)};
    const handleLogoutClick = () => { setIsLoggedIn(false) };
    let button;

    if(isLoggedIn) {
        button = <LogOutButton  onClick = {handleLogoutClick}/>
    } else {
        button = <LogInButton  onClick = {handleLoginClick}/>
    }
  return (
    <div>{button}</div>
  )
}

// Below two are components created within a component 
// These components will be used by the LoginControl
function LogInButton(props) {

    // onClick can also be passed as props to the component
    return (
        <button onClick={props.onClick}>Login</button>
    );
}
    // onClick can also be passed as props to the component
function LogOutButton(props) {
    return (
        <button onClick={props.onClick}LogOut>Logout</button>
    );
}



export default LoginControl