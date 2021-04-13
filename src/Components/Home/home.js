import React  from 'react';
import { useHistory } from 'react-router';
import './home.css';


export const Home = () => {

   const history = useHistory()

   function handleClick(){
      //history.push('/tables')
      setTimeout(() => {
        history.push('/tables');
      }, 300);
    }

    return(
        <div className = "Home-container" >
            <img src = "http://dslv9ilpbe7p1.cloudfront.net/X_JJme08cfvnWZ_UqiapyA_store_banner_image.png" height = "250" width = "600"/>
            <button className= "Home-button"  onClick = {handleClick}>Get Started</button>
        </div>
    )
}