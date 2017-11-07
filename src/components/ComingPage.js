import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Coming = styled.div`
body {
  background: #0AC9B0;
  width: 100%;
  max-width: 1200px;
}
.frame-wrapper {
  padding: 100px;
}
.frame {
  padding: 1px 50px 50px;
  background: gray;
  border-radius: 5px;
  box-shadow: 3px -3px 0px 1px #C0CCCA;
  min-width: 230px;
}
.camera {
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: #505251;
  margin: 23px auto;

}
.image {
  width: 900px;
  height: 450px;
  max-width: 100%;
  border-radius: 2px;
  background: white;
}
.base {
  border-bottom: 60px solid #505251;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;
	height: 0;width: 100px;
  margin: 0 auto;
}
.foot {
width: 200px;
  height: 20px;
  margin: 0 auto;
  background: white;
  border-radius: 3px;
  box-shadow: 0px -5px 0px -1px #97A19F;
}
.button {
    height: 25px;
  width: 25px;
  border: 1px solid grey;
  border-radius: 50%;
  margin: 8px auto;
  /* background: #F0F5F4; */
  display: none;
}
@media (max-width: 700px) {
  .base {
    display: none;
  }
  .foot {
    display: none;
  }
  .button {
    display: block;
  }
  .frame {
    padding: 1px 40px 3px 40px
  }
  .camera {
    margin: 18px auto;
  }
}
@media (max-width: 500px) {
  .frame-wrapper {
      padding: 50px;
  }
  .frame {
    padding: 1px 20px 1px;
  }
  .button {
    margin: 15px auto;
    height: 35px;
    width: 35px;
  }
  .camera {
    margin: 23px auto;
  }
}
iframe {
    height: 450px;
    width: 900px;
}
`

class ComingPage extends Component {

    render() {
        return (
            <Coming>
                        <div className="frame-wrapper">  
        <div className="frame" >
            <div className="camera"></div>
            <div className="image"><iframe src="https://www.youtube.com/embed/7gZdhiAM-L8" frameborder="0" allowfullscreen></iframe> </div>
            <div className="button"></div>
        </div>
        <div className="base"></div>
        <div className="foot"></div>
        </div>

          </Coming>
        );
    }
}

export default ComingPage;