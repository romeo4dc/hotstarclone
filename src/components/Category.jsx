import React, { useEffect } from 'react'
import styled from 'styled-components';
import Action from '../categories/Action';
import BestInSports from '../categories/BestInSports';
import BestOfkids from '../categories/BestOfKids';
import BestOfQuix from '../categories/BestOfQuix';
import Documentory from '../categories/Documentory';
import HotstarSpecials from '../categories/HotstarSpecial';
import LatestTrending from '../categories/LatestTrending';
import NewAndUpcoming from '../categories/NewsAndUpcoming';
import NewShortMovies from '../categories/NewShortMovies';
import PopularChannels from '../categories/PopularChannels';
import PopularGenres from '../categories/PopularGenres';
import PopularInAction from '../categories/PopularInAction';
import PopularInBiopic from '../categories/PopularInBiopic';
import PopularInComedy from '../categories/PopularInComedy';
import PopularInCrime from '../categories/PopularInCrime';
import PopularInDrama from '../categories/PopularInDrama';
import PopularInFamily from '../categories/PopularInFamily';
import PopularInMythology from '../categories/PopularInMythology';
import PopularInReality from '../categories/PopularInReality';
import PopularInRomance from '../categories/PopularInRomance';
import PopularInScience from '../categories/PopularInScience';
import PopularInTalkShow from '../categories/PopularInTalkShow';
import PopularInTeen from '../categories/PopularInTeen';
import PopularInTravel from '../categories/PopularInTravel';
import PopularLanguages from '../categories/PopularLanguages';
import PopularMovies from '../categories/PopularMovies';
import PopularShows from '../categories/PopularShows';
import QuixShows from '../categories/QuixShows';
import Show2023 from '../categories/Show2023';
import StarBharat from '../categories/StarBharat';
import StarPlus from '../categories/StarPlus';
import ThrillerShows from '../categories/ThrillerShows';
import TopFreeMovies from '../categories/TopFreeMovies';
import FooterFunc from './Footer';
import Channels from '../categories/Channels';
import MoboFooter from '../MoboComp/MoboFooter';
import { usePopup } from '../Context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { firestore, useFirebase } from '../firebase/firebase';
import { doc, updateDoc } from 'firebase/firestore';
const Cateogory = () => {
  const pFunc = usePopup();
  const fb = useFirebase()
  const navigate = useNavigate();
  const { updateData, moboUpdate } = fb;

  return (
    <>
    <BigContainer onClick={(e)=>{
    updateData(e)
    if(e.target.classList.contains('cards')){
    navigate("/shows")
    }
    }}>
      <LatestTrending/>
      <StarPlus/>
      <StarBharat/>
      <Action/>
      <BestInSports/>
      <PopularShows/>
      <PopularInAction/>
      <PopularMovies/>
      <ThrillerShows/>
      <Show2023/>
      <BestOfQuix/>
      <BestOfkids/>
      <PopularChannels/>
      <Channels/>
      <QuixShows/>
      <TopFreeMovies/>
      <NewAndUpcoming/>
      <NewShortMovies/>
      <PopularInMythology/>
      <PopularInDrama/>
      <PopularInReality/>
      <PopularInRomance/>
      <PopularInFamily/>
      <PopularInCrime/>
      <PopularInComedy/>
      <PopularInBiopic/>
      <Documentory/>
      <PopularInTravel/>
      <PopularInTeen/>
      <PopularInScience/>
      <PopularInTalkShow/>
      <HotstarSpecials/>
      <PopularGenres/>
      <PopularLanguages/>
      <Footer><FooterFunc/></Footer>
    </BigContainer>
    <MoboContainer onClick={(e)=>{
      moboUpdate(e)
      navigate("/mshows")
    }}>
    <LatestTrending/>
      <StarPlus/>
      <StarBharat/>
      <Action/>
      <BestInSports/>
      <PopularShows/>
      <PopularInAction/>
      <PopularMovies/>
      <ThrillerShows/>
      <Show2023/>
      <BestOfQuix/>
      <BestOfkids/>
      <PopularChannels/>
      <Channels/>
      <QuixShows/>
      <TopFreeMovies/>
      <NewAndUpcoming/>
      <NewShortMovies/>
      <PopularInMythology/>
      <PopularInDrama/>
      <PopularInReality/>
      <PopularInRomance/>
      <PopularInFamily/>
      <PopularInCrime/>
      <PopularInComedy/>
      <PopularInBiopic/>
      <Documentory/>
      <PopularInTravel/>
      <PopularInTeen/>
      <PopularInScience/>
      <PopularInTalkShow/>
      <HotstarSpecials/>
      <PopularGenres/>
      <PopularLanguages/>
      <Mobo><MoboFooter/></Mobo>
    </MoboContainer>
    </>
  )
}

const BigContainer = styled.section`
/* border: 2px solid red; */
/* background:  linear-gradient(to bottom, #091224, #0c111b 300px); */
padding-top: 1em;
padding-left: 6.5em;
height: 250px;
display: flex;
flex-direction: column;
gap:1em;
/* width: 100%; */
height: fit-content;
overflow: hidden;
@media (max-width:768px) {
  padding-inline: .6em;
  display: none;
}
`;
const Footer = styled.div`
width:100%;
margin-left: -95px;
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
export default Cateogory;
