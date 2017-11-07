import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHourglass, FaHome, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Nav = styled.div`
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(255, 0, 102);
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}


 `

class NavBar extends Component {
    render() {
        return (
            <Nav>
            <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/LivePage">Offers</a></li>
  <li><a href="/ComingPage">Coming Soon</a></li>
</ul>
          </Nav>
        );
    }
}

export default NavBar;