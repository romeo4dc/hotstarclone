import React, { useEffect } from 'react'
import styled from 'styled-components';
import PopularInAction from '../categories/PopularInAction';
import PopularInBiopic from '../categories/PopularInBiopic';
import PopularInComedy from '../categories/PopularInComedy';
import PopularInCrime from '../categories/PopularInCrime';
import PopularInTeen from '../categories/PopularInTeen';
import PopularMovies from '../categories/PopularMovies';
import FooterFunc from '../components/Footer';
import MoboFooter from '../MoboComp/MoboFooter';
import { useFirebase } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import DisneyChannel from '../categories/DisneyChannel';
const Disney = () => {
  const fb = useFirebase();
  const navigate = useNavigate();
  const { updateData, moboUpdate, getDocsByQuery } = fb;
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
      <PopularMovies/>
      <PopularInAction/>
      <PopularInCrime/>
      <PopularInComedy/>
      <PopularInTeen/>
      <PopularInBiopic/>
      <Footer><FooterFunc/></Footer>
    </Container>
    <MoboContainer onClick={(e)=>{
      moboUpdate(e)
      navigate("/mshows")
    }}>
      <DisneyChannel/>
      <PopularMovies/>
      <PopularInAction/>
      <PopularInCrime/>
      <PopularInComedy/>
      <PopularInTeen/>
      <PopularInBiopic/>
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
export default Disney;
