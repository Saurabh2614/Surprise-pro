import React from "react";
import { useNavigate } from 'react-router-dom';
import Img from '../imes/hug-love.gif';

export default function Home2() {
    const navigate=useNavigate();
        function yes(){
          console.log("yes");
        }
        function no(){
          console.log("no");
        }
    return(
        <div className='d1'>
      <div className='d'>
      
      <img src={Img} alt='img' />
      <br/>
        <h2><strong>Soch Le Acche Se '😫😫</strong></h2><br/>
        <h4>DO You Love Me 💕💕😩🤌</h4><br/>
        <div className='but'>
          <button onClick={yes} id="yes">Yes</button> &nbsp; <button onClick={()=>{navigate("/home3")}} id="no">No</button>
        </div>
      </div>
      
    </div>
    )
}