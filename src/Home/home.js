import React  from 'react';
import { useHistory } from 'react-router';
import './home.css';


export const Home = () => {

   const history = useHistory()

   function handleClick(){
      history.push('/tables')
    }

    return(
        <div className = "Home-container" >
            <button className= "Home-button"  onClick = {handleClick}>Get Started</button>
        </div>
    )
}