import React, { useState } from 'react'
import styled from 'styled-components';
import { sliderItems } from '../data';
const Sldie = ({TvDownFunc}) => {
  return (
    <Container onMouseEnter={TvDownFunc}>
    <Section>
    <Cards style={{marginLeft:'0px'}}>
        <Left>
          <h1>Yeh Rishta Kya Kehlata Hai</h1>
          <span>Starplus - Hindi - Drama</span>
          <p>A personal tragedy creates a rift in Abhimanyu and Akshara’s marital life. Years later, when destiny offers a second chance, will the duo embrace love?</p>
        </Left>
        <Right>
         <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d" alt="" />
        </Right>
      </Cards>
      {sliderItems.map((val, ind)=>{
        return(
      <Cards key={ind}>
        <Left>
          <h1>{sliderItems[ind].title}</h1>
          <span>{sliderItems[ind].toptitle}</span>
          <p>{sliderItems[ind].desc}</p>
        </Left>
        <Right>
         <img src={sliderItems[ind].img} alt="" />
        </Right>
      </Cards>
        )
      })}
      
      </Section>
    </Container>
  )
}

const Container = styled.section`
/* border: 2px solid red; */
width:auto;
min-height: 450px;
display: flex;
justify-content: center;
`;

const Section = styled.div`
/* border:2px solid green; */
display: flex;
justify-content: center;
width:100%;
gap: 1.4em;
background: linear-gradient(#141b29,#131924 300px);
/* overflow: hidden; */
border-radius: 5px;
`;

const Cards = styled.div`
/* border: 2px solid blue; */
width:1170px;
height:450px;
display: flex;
border-radius: 5px;
`;

const Left = styled.div`
background-color: #030b17;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
position: relative;
display: flex;
width:360px;
flex-direction: column;
align-items: flex-start;
padding-left: 3em;
padding-top: 4em;
gap: 1em;
h1{
  color:#fff;
  -webkit-text-stroke: .2px;
  font-size: 1.5rem;
}
span{
  color:rgba(255, 255, 255, 0.6);
  -webkit-text-stroke: .2px;
}
p{
  color:rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  letter-spacing: .5px;
}
&::after{
  position: absolute;
  content:"";
  top:0;
  background:linear-gradient(to right, #030b17, rgba(0,0,0,0));
  right:-79px;
  height:450px;
  width:20%;
  border: none; 
} 
`;



const Right = styled.div`
width:800px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
overflow: hidden;
img{
width:100%;
height: 450px;
}
`;

export default Home
