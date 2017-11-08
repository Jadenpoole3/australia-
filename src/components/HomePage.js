    import React, { Component } from 'react';
    import styled from 'styled-components';

    const How = styled.div`
    margin: auto;
    
`;
const Words = styled.div`
font-size: 25px;
display: block;
margin-left: 50px;
margin-right: 50px;
text-align: center;
max-width: 800px;


`
    

    class HomePage extends Component {
        render() {
            return (
                <How>
                    
                    <h1> How to Use</h1>
                    <Words>
        <p>The Xinja partnership with Equitise, Australia’s first approved crowdfunding platform, has created an outstanding opportunity to provide you with investor level access to Australia’s first true digital bank.
    This very limited time investment opportunity will be open to all Australians through Equitise in the imminent future. Investors will be able to invest amounts starting from $250 as part of a $500,000 capital raising contributing to Xinja’s current $15 million institutional investment round.
    Xinja’s digital banking platform incorporates the best of modern banking technology and security as well as data analytics and AI services to continually evolve and enhance the customer experience and promote ongoing money mindfulness via the Xinja mobile app. Capital raised from the Equitise crowdfunding will go towards developing the next phase of Xinja’s core banking platform.</p>
   </Words>
    <h1>So Why Is This Possible</h1>
    <Words>
    <p> Previously, federal rules regulating the formation of banks were restrictive with significant barrier to entry. 
        These restrictions were lifted in the May 2017 budget when bank related licensing requirements were softened to encourage the banking sector to be modernised.
         Xinja has applied for an approved deposit-taking institution (ADI) licence and on approval plans to launch its first prepaid card late this year before moving into the home loan and deposit account markets in mid-2018. 
         Xinja is a great example of the implementation of disruptive technologies that will revolutionise banking in Australia, similar to digital banks that have launched overseas.</p>
         </Words>
        </How>
            
            );
        }
    }

    export default HomePage;