import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Home(){
    const navigate=useNavigate();
    
      const [ad,setAd]=useState();
    return(
        <header className="App-header">
        
        <div className='field'>
          <label id='name' >Enter your name</label><br/>
          <input type='text' id='f' onChange={(e)=>setAd(e.target.value)}></input><br/>
          <button id='btn' onClick={()=>{navigate("/home1")}}>Add</button>
          {/* <input type='btn1' onClick={add}>Add</input> */}
        </div>
        <br/>
        <marquee> Welcome '❤️❤️ <u><i>{ad}</i></u> ❤️❤️' Princess </marquee>
      </header>

    );
}