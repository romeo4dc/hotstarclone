import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { usePopup } from '../Context/Context';
import Sidebar from '../components/Sidebar';
const Search = () => {
  const [sCross, setScross] = useState();
  const [searchText, setSearchText] = useState("");
  const [moviesData, setMoviesData] = useState(null);
  const SearchMovies = (e) => {
    setSearchText(e.target.value)
    if (e.target.value.length >= 0) {
      setScross(true)
    }
    if (e.target.value.length === 0) {
      setScross(false)
    }
  }

  const getMovieData = async (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {      
      const res = await axios.get(`https://www.omdbapi.com?s=${searchText}&apikey=5b411b8a`)
      setMoviesData(res.data.Search)
      setSearchText("")
    }
  }

  return (
    <>
      <Input>
        <InpSec>
          <img src="assets/inpSearch.svg" alt="" />
          <input type="text" placeholder='Movies, shows and more' onChange={SearchMovies} value={searchText} onKeyUp={getMovieData} />
        </InpSec>
        { sCross && <img style={{ marginRight: '.6em', cursor: 'pointer' }} src="/assets/cross.svg" alt="" onClick={()=>{
          setScross(false)
          setSearchText("")
          }}/>}
      </Input>
      <Container>
        {
          moviesData && moviesData.map((val, ind) => {
            return (
              <Card key={val.Title + ind}>
                <img src={val.Poster} alt="" />
                <Details>
                  <button>
                    <img src="/assets/play.svg" alt="" />
                    <span>Watch Now</span>
                  </button>
                  <div>
                    <span>{val.Title}</span>
                    <span>{val.Year}</span>
                  </div>
                  <Divide></Divide>
                </Details>
              </Card>
            )
          })
        }
      </Container>
    </>
  )
}

const Container = styled.div`
margin-left: 100px;
padding-top:2em;
max-width: 1120px;
gap:1em;
display: flex;
flex-wrap:wrap ;
background:  linear-gradient(to bottom, #091224, #0c111b 300px);;
`;
const InpSec = styled.div`
display: flex;
align-items: center;
gap: 1em;
width: 100%;
`;
const Input = styled.div`
/* border: 2px solid white; */
border-radius: 8px;
/* transform: translateY(2em) translateX(.1em); */
margin-top: 2em;
background: #252833;
padding: 0em 1.2em;
gap: 1em;
width:86%;
height: 4em;
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 100px;
img{
    filter: invert(1);
    width:30px;
    height:30px;
}
input{
    outline: none;
    border: none;
    letter-spacing: 1px;
    caret-color: #3586f0;
    background: transparent;
    font-size: 1.2rem;
    -webkit-text-stroke: .1px;
    color:#fff;
    width: 100%;
    &::-webkit-input-placeholder{
        font-size: 1.2rem;
        color: #d2e3ff8a;
    }
}
`;
const Divide = styled.div`
background-image:linear-gradient(to top, rgba(4,8,15,0), #16181f, #16181f);
width:100%;
max-height: 10%;
position: absolute;
/* left: 0; */
/* margin-left:-1px; */
top: -1.1em;
transform: rotate(180deg);
`;
const Details = styled.div`
width: 100%;
max-height: 45%;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1em;
position: absolute;
visibility: hidden;
transition: visibility .5s cubic-bezier(0.33, 0.04, 0.63, 0.93);
transition: background .2s ease-in-out;
background-color: #16181f;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
pointer-events: none;
button{
  display: flex;
  align-items: center;
  width:165px;
  height: 30px;
  padding: 1em;
  margin: 0 auto;
  margin-top: 60px!important;
  transform: translateY(-65px);
  z-index: 999;
  justify-content: center;
  gap: .3em;
  border-radius: 5px;
  border: none;
  transition: all .3s ease-in-out;
  cursor: pointer;
  img{
    filter: invert(1);
    height:13px;
    width: 13px;
  }
  span{
    color: #000000!important;
    font-size: 9px!important;
    font-weight: 600;
  }
  &:hover{
    transform: scale(1.02);
  }
}
div{
  padding: .2em .4em;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  position: relative;
  top: -40px;
}
&:hover{
  background-color: #16181f;
}
span:first-child{
  letter-spacing: 1px;
    color: rgb(255, 255, 255);
    padding: 0px;
    margin: 0px;
    font-size: 1rem;
    font-family: fantasy;
    word-spacing: 0.4em;
    text-align: center;
    margin-top: 5px;
  }
  span:last-child{
    letter-spacing: .3px;
    color: rgb(255, 255, 255);
    padding: 0px;
    margin: 0px;
    word-spacing: 0.4em;
    font-size:.7rem;
    top:10px;
  }
  p{
    color:white;
    font-size:9px;
    font-weight: 500;
    line-height: 14px;
    color:#8f98b2;
}

`;
const Card = styled.div`
height: 280px;
flex: 1 1 200px;
cursor: pointer;
display: flex;
justify-content: center;
transition: transform .5s ease-in-out;
position: relative;
overflow: hidden;
border-radius: 5px;
img{
  width: 100%;
}
&:nth-child(1){
  &:hover{
    transform: translateX(2em) scaleY(1.3) scaleX(1.3);
    z-index: 9999;
  }
}
&:hover{
  transform: scaleY(1.2) scaleX(1.3);
  z-index: 99999;
    ${Details}{
        /* z-index: 2; */
        visibility: visible;
        transform: scale(1);
        height:54.2%
    }
}
`;


export default Search;
