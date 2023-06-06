import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Movies from '../CateogoryFolders/Movies';
import { usePopup } from '../Context/Context';
import MainHome from './MainHome';
import MovieHome from './MovieHome';
import MoviesSlider from './MoviesSlider';
const MainMovies = () => {
 
    const Func = usePopup();
    
 console.log(Func.sFunc)
    return (
        <>
        <Container className='main' onClick={Func.Main}>
            <MovieHome />
            <Right>
               <MoviesSlider/>
            </Right>
        </Container>
        <Movies/>
        </>
    )
}

const Container = styled.div`
/* border: 2px solid red; */
margin-left: 100px;
min-height:530px;
display: flex;
align-items: end;
justify-content: space-between;
padding-bottom: 1em;
background:linear-gradient(178.5deg,rgba(15,16,20,0) 57.9%,rgba(15,16,20,.01) 64.8%,rgba(15,16,20,.05) 67.56%,#0c0d11 96.94%),linear-gradient(90deg,#01040f,rgb(7 8 15 / 85%) 16.15%,rgb(4 5 7 / 73%) 25.52%,rgba(15,16,20,.6) 32.81%,rgba(15,16,20,.05) 52.08%,rgba(15,16,20,0) 65.1%),url(https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/3981/1463981-i-76197ed0f4b9) no-repeat center/cover;
background-attachment: fixed!important;
&:after{
    content:"";
    position: absolute;
    bottom:50px;
    left:0;
    width:100%;
    height:10%;
    background:linear-gradient(180deg,rgba(15,16,20,0),#0f1014);
    z-index: 99999;
}
span{

}
`;
const Right = styled.div`
/* border:2px solid red; */
max-width:400px;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 3px;
img:last-child{
    height: 31px;
    z-index:90000;
    width: 31px;
    filter:invert(1);
    transform: rotateY(180deg) translateX(30px);
    cursor: pointer;
}
`;

export default MainMovies;

