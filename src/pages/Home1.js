import { useNavigate } from 'react-router-dom';

import Img from '../imes/1ee269d6d6b74a3bf8583e2347697e3c.gif';

export default function Home1() {
    const navigate=useNavigate();
    // function yes(){
    //   console.log("yes");
    // }
    // function no(){
    //   console.log("no");
    // }
    return (
      <div className='d1'>
        <div className='d'>
          <img src={Img} alt='img' />
          <br/>
          <h2><strong>Sorry princess I have to ask you a one question. '🤗🤗</strong></h2><br/>
          <h4>DO You Love Me 💕💕😩🤌</h4><br/>
          <div className='but'>
            <button onClick={()=>{navigate("/home2")}} id="yes">Yes</button> &nbsp; <button onClick={()=>{navigate("/home2")}} id="no">No</button>
          </div>
        </div>
        
      </div>
    );
  }