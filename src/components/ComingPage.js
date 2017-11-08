import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Coming = styled.div`
.iphone {
  box-shadow: inset 0 0 3px 0 rgba(0,0,0,0.2), 0 0 0 1px #999, 0 0 30px 0px rgba(0,0,0,0.7);
  border: 5px solid #d9dbdc;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 50px;
  height: 877px;
  width: 423px;
  position: relative;
  margin: 30px auto;
  float: left;  
  // Scale so that the iPhone fits in view
  transform: scale(.8);
}

.iphone-top {
  padding: 5px 110px 40px;
  position: relative; 
  .speaker {
    display: block;
    width: 70px;
    height: 6px;
    margin: 0 auto;
    border-radius: 6px;
    background: #292728;
  }
  
  .camera {
    display: block;
    margin: 0 auto;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin-bottom: 13px;
    background: #333;
  }
  
  .sensor {
    display: block;
    width: 15px;
    height: 15px;
    float: left;
    background: #333;
    margin-top: -5px;
    border-radius: 50%;
  }
}

.top-bar, .bottom-bar {
  display: block;
  width: 423px;
  height: 15px;
  border: {
    left: 5px solid #BBB;
    right: 5px solid #BBB;
  }
  position: absolute;
  left: -5px;
}
.top-bar {
  top: 65px;
}

.bottom-bar {
  bottom: 65px;
}

.iphone-screen {
  background: #eee;
  border: 1px solid #fff;
  height: 677px;
  width: 375px;
  margin: 0 auto;
  border: 2px solid rgba(0,0,0,0.9);
  border-radius: 3px;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.buttons {
  .on-off, .up, .down, .sleep {
    display: block;
    background: #CCC;
    position: absolute;
    border-radius: 2px 0px 0px 2px;
  }
  .on-off {
    height: 40px;
    width: 3px;
    top: 100px;
    left: -8px;
  }
  
  .up, .down, .sleep {
    height: 60px;
    width: 5px;
    left: -10px;
  }
  
  .up {
    top: 170px;
  }
  
  .down {
    top: 250px;
  }
  
  .sleep {
    left: auto;
    right: -10px;
    top: 170px;    
    border-radius: 0px 2px 2px 0px;
  }
}

.iphone-bottom {
  padding: 10px 0 0;
  span {
    display: block;
    margin: 0 auto;
    width: 68px;
    height: 68px;
    background: #ccc;
    border-radius: 50%;
    background: linear-gradient(135deg, #303233 0%, #b5b7b9 50%, #f0f2f2 69%, #303233 100%);
    position: relative;
    &:after {
      content: ""; 
      display: block;
      width: 60px;
      height: 60px;
      background: #fff;
      border-radius: 50%;
      position: absolute;
      left: 4px;
      top: 4px;
    }
  }
}
`

const Info = styled.div`
font-size: 33px;
float: right;
text-align: center;
display: inline-block;
width: 35%;

margin-bottom: 20px;
margin-right: 8px;
margin-left: 0px;
border-radius: 50px;
padding: 2em;
position: relative;

label {
  width: 300px;
  height: 200px;
}
`

class ComingPage extends Component {

    render() {
        return (
            <Coming>
             
        
               <Info>
  <h1> How It Should Be </h1>
  <p>We are building Australia's first 100% digital bank. Designed
    for mobile - made for people. We are not a bank yet, but we want to be,
    and we want you to be a part of it.
  </p>
  <p> Now That you've registered your interest in equity crowdfunding
    if you sign up to Xinja you'll get 24 hours early access to the Equitise
    deal room.
  </p>
  <label for="state">Join Now </label>
    <input type="text" name="state"/>
  </Info>
                 <div className="iphone">
    <div className="iphone-top">
      <span className="camera"></span>
      <span className="sensor"></span>
      <span className="speaker"></span>
    </div>
    <div className="top-bar"></div>
    <div className="iphone-screen">
    <iframe src="https://www.youtube.com/embed/7gZdhiAM-L8" frameborder="0" width="375" height="677" allowfullscreen></iframe> 
    </div>
    <div className="buttons">
      <span className="on-off"></span>
      <span className="sleep"></span>
      <span className="up"></span>
      <span className="down"></span>
    </div>
    <div className="bottom-bar"></div>
    <div className="iphone-bottom">
      <span></span>
      
    </div>
    
  </div>
 
</Coming>
        );
    }
}


export default ComingPage;