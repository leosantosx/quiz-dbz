import styled from 'styled-components';
import React from 'react';

const QuizLogo = styled.div`
  text-align: center;
  img{
    width: 200px;
    height: 100px;
  }

  @media screen and (max-width: 500px){
    text-align: left;
    img{
      width: 150px;
      height: 75px;
    }
  }
`
export default function Logo(){ 
  return (
  <QuizLogo>
    <img src="https://leo-sant.s3.amazonaws.com/logo.png"/>
  </QuizLogo>
)}