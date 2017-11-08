import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Offer = styled.div`
text-aign:center;
display: flex;
justify-content: space-between;
margin:auto;
text-size: 70px;
`
const Head = styled.div`
text-aign:center;
margin:auto;
text-size: 70px;
`

class LivePage extends Component {
    state = {
        offers: []
    }
    componentWillMount () {
        this.getAllOffers()
    } 
    getAllOffers  = async () => {
        const res = await axios.get('https://api.equitise.exchange/offer')
        this.setState({offers: res.data.comingSoon})
    }

    render() {
        return (
            <div>
                
               <h1> Offers</h1> 
               <h3> These are just some of the things we offer</h3>

               {this.state.offers.map( offer => {
                    return (<Link key={offer._id} to={`/offer/${offer._id}`}><Offer>{offer.name}</Offer></Link>)
               })}

    
            </div>
           
            )
    }
}

export default LivePage;