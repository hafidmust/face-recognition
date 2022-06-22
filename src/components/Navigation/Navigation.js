const Navigation = ({onRouteChange, isLoggedIn}) => {

    if (isLoggedIn) {
        return(
        <nav style={{display : "flex", justifyContent: 'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() =>onRouteChange('signout')}>Sign out</p>
        </nav>
    )
    }else{
        return(
            <nav style={{display : "flex", justifyContent: 'flex-end'}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() =>onRouteChange('signin')}>Signin</p>
            <p className="f3 link dim black underline pa3 pointer" onClick={() =>onRouteChange('register')}>Register</p>
        </nav>
        );
    }
    
}

export default Navigation;