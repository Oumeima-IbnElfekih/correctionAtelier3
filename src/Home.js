import React, {Component} from "react";
import styled from "styled-components";
export default function Home() {
   
        return (
            <WelcomeWrapper>
                <h1>Welcome to our shop</h1>
            </WelcomeWrapper>
        );
    
}
const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;
