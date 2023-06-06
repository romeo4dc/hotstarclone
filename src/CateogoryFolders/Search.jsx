import React from 'react'
import styled from 'styled-components';
import PopularInSearches from '../categories/PopularInSearches';
import { usePopup } from '../Context/Context';
import Sidebar from '../components/Sidebar';
const Search = () => {
    const inpFunc = usePopup();
  return (
    <Container>
      <Input>
      <InpSec>
        <img src="assets/inpSearch.svg" alt="" />
        <input type="text" placeholder='Movies, shows and more' onChange={inpFunc.Search}/>
        </InpSec>
        <img  style={{marginRight:'.6em', visibility:inpFunc.sCross, cursor:'pointer'}} src="assets/cross.svg" alt="" onClick={inpFunc.Scross} />
      </Input>
      <PopularInSearches/>
    </Container>
  )
}

const Container = styled.div``;
const InpSec = styled.div`
display: flex;
align-items: center;
gap: 1em;
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
    width:20em;
    letter-spacing: 1px;
    caret-color: #3586f0;
    background: transparent;
    font-size: 1.2rem;
    -webkit-text-stroke: .1px;
    color:#fff;
    &::-webkit-input-placeholder{
        font-size: 1.2rem;
        color: #d2e3ff8a;
    }
}
`;

export default Search;
