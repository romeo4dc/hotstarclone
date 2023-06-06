import React, { useEffect } from 'react'
import styled from 'styled-components';
import PopularInFamily from '../categories/PopularInFamily';
import PopularInReality from '../categories/PopularInReality';
import PopularInDrama from '../categories/PopularInDrama';
import PopularChannels from '../categories/PopularChannels';
import QuixShows from '../categories/QuixShows';
import FooterFunc from '../components/Footer';
import { useFirebase } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import MoboFooter from '../MoboComp/MoboFooter';
import Sidebar from '../components/Sidebar';
const Tv = () => {
  const fb = useFirebase();
  const navigate = useNavigate();
  const { updateData, moboUpdate,  getDocsByQuery } = fb;
  useEffect(()=>{
     getDocsByQuery()
  },[])
  return (
    <>
    <Container onClick={(e)=>{
    updateData(e)
    if(e.target.classList.contains('cards')){
    navigate("/shows")
    }
    }}>
     <PopularInReality/>
     <PopularChannels/>
     <PopularInDrama/>
     <PopularInFamily/>
     <QuixShows/>
     <Footer><FooterFunc/></Footer>
    </Container>
    <MoboContainer onClick={(e)=>{
      moboUpdate(e)
      navigate("/mshows")
    }}>
     <PopularInReality/>
     <PopularChannels/>
     <PopularInDrama/>
     <PopularInFamily/>
     <QuixShows/>
     <Mobo><MoboFooter/></Mobo>
    </MoboContainer>

    </>
  )
}
const Container = styled.section`
padding-top: 1em;
padding: 0em .5em;
height: 250px;
display: flex;
flex-direction: column;
gap:1em;
margin-left: 100px;
/* width: 100%; */
height: fit-content;
overflow: hidden;
background: #0f1014;
@media(max-width:768px){
  display: none;
}
`;
const Footer = styled.div`
margin-left: -100px;
@media(max-width:768px){
  display: none;
}
`;
const MoboContainer = styled.div`
padding-top: 1em;
padding-left: 6.5em;
height: 250px;
display: none;
flex-direction: column;
gap:1em;
/* width: 100%; */
height: fit-content;
overflow: hidden;
@media (max-width:768px) {
  padding-inline: .6em;
  display: flex;
}
`;
const Mobo = styled.div`
display: none;
@media(max-width:768px){
  display: block;
}
`;
export default Tv;
