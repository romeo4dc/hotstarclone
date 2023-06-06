import React from 'react'
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import { sbanim } from '../data';
const VlatestTrending = () => {
  return (
    <>
    <Sidebar/>
    <Container>
    <span>Latest & Trending</span>
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
          sbanim.map((val, ind)=>{
            return(
            <Card key={ind}>
        <img src={sbanim[ind].img} alt="" />
        <Details>
        <span>{sbanim[ind].title}</span><br/>
          <span>{sbanim[ind].subtitle}</span>
          <p>{sbanim[ind].desc}</p>
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
    </>
  )
}

const Container = styled.div`
margin-left: 100px;
width: fit-content;
display: flex;
justify-content: center;
flex-direction: column;
background:#0f1014;
span{
    color:white;
    font-size: 2rem;
    -webkit-text-stroke: .2px;
    letter-spacing: 1.5px;
    margin:2.5em 0em;
    /* font-weight: 500; */
    -webkit-text-stroke: 1px;
    text-align: center;
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
/* width:90%; */
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
    -webkit-text-stroke: .1px;
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

export default VlatestTrending;

