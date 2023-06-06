import React from 'react'
import styled from 'styled-components';
import { anim } from '../data';
const PopularInSearches = () => {
  return (
    <Container>
    <span>Popular in Searches</span>
      <Cards>
      <Card>
        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5779/1475779-v-c822a553b74d" alt="" />
        <Details>
        <span>Veera Simha Reddy</span><br/>
          <p>Jai's reunion with his long-lost influential father Veera gets chaotic when the latter's past return ...</p>
          <Watchlist>
            <span>+</span><span>ADD TO WATCHLIST</span>
          </Watchlist>
        </Details>
        </Card>
        {
          anim.map((val, ind)=>{
            return(
            <Card key={ind}>
        <img src={anim[ind].img} alt="" />
        <Details>
        <span>{anim[ind].title}</span><br/>
          <span>{anim[ind].subtitle}</span>
          <p>{anim[ind].desc}</p>
          <Watchlist>
            <span>+</span><span>ADD TO WATCHLIST</span>
          </Watchlist>
        </Details>
        </Card>
            )
          })
        }
      </Cards>
    </Container>
  )
}

const Container = styled.div`
/* border: 2px solid red; */
margin-left: 100px;
padding-top:2em;
width: 100%;
display: flex;
flex-direction: column;
background:  linear-gradient(to bottom, #091224, #0c111b 300px);;
span{
    color:white;
    font-size: 1.2rem;
    -webkit-text-stroke: .2px;
    letter-spacing: .3px;
    margin-bottom: 1em;
    margin-top: .8em;
}
`;

const Cards = styled.div`
width:fit-content;
position: relative;
display: flex;
flex-wrap: wrap;
gap: .5em;
transition: all .5s;
min-height: 60em;
width:90%;
/* border:2px solid red; */
img{
    width:155px;
    height:240px;
    border-radius: 5px;
}
`;

const Details = styled.div`
max-width:155px;
height: 240px;
background-image:linear-gradient(to bottom, rgba(4,8,15,0), #192133, #192133);
position: absolute;
bottom: 0px;
display: flex;
flex-direction: column;
justify-content: end;
padding: 10px;
padding-right:10px;
transition: all .5s ease-in-out;
visibility: hidden;
transition: background .2s ease-in-out;
&:hover{
  background-color: #ffffff1f;
}
span{
    color:white;
    font-size:.6rem;
    letter-spacing: .3px;
    color:#fff;
    padding: 0;
    margin: 0;
}
span:nth-child(3){
    margin-top: -14px;
    margin-bottom: 4px;
    color:white;
    font-size:.5rem!important;
    color:#fff;
}
p{
    color:white;
    font-size:.55rem;
    -webkit-text-stroke: .2px;
    color:#ffffffb8;
}
`;

const Card = styled.div`
overflow: hidden;
height: 210px;
cursor: pointer;
display: flex;
justify-content: center;
transition: all .5s ease-in-out;
width:fit-content;
border-radius: 4px;
&:hover{
    transform: scaleY(1.3) scaleX(1.4);
    ${Details}{
        visibility: visible;
        transform: scale(1);
    }
}
`;

const Watchlist = styled.div`
display: flex!important;
align-items:center!important;
justify-content: space-between;
width: 100px;
margin-top: 5px;
span{
    font-size:.5rem!important;
    color:#ffffffab;
    padding:0;
    margin: 0;
}
span:nth-child(1){
    font-size: 1.1rem!important;
    -webkit-text-stroke: .1px;
    color:#ffffffab;
}
`;

export default PopularInSearches;

