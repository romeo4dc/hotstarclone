import React, { createContext, useEffect } from 'react'
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import MainSlider from '../EditSlider/MainSlider';
import { updateDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { Link } from 'react-router-dom';
const ConfirmProfile = () => {
  const Func = usePopup()
  const updateData = async () => { 
    const result = doc(firestore, "user" , "7bfqhAryDRWp7pf6lq8P")
    await updateDoc(result,{
      photoURL:Func.imgMSrc,
      kPhotoURL:Func.imgSrc,
      mainVal:Func.MainInpVal,
      kidsVal:Func.kidsInpVal
    })
}
  return (
    <Container>
    <Heading>
      <span>Edit Profile</span>
      </Heading>
      <MainSlider/>
      <InputSec style={{borderColor:Func.eBg}}>
        <input type="text" onChange={Func.profile ? Func.sEdit : Func.EditInp} />
        <label onClick={Func.editLabel}>Profile Name</label>
        <img style={{display:Func.eIp}} src="assets/cross.svg" alt="" onClick={Func.EdCross}/>
      </InputSec>
      <Link to="/myspace" onClick={updateData}><SaveBtn disabled className='btn' onClick={updateData}>
      Save & Continue
      </SaveBtn></Link>
      <Left style={{display:Func.eLdis}} onClick={Func.ElDis}>
      <img src="assets/arright.svg" alt=""  onClick={Func.eSliderL} />
    </Left>
    <Right style={{display:Func.eRdis}} onClick={Func.ErDis}>
      <img src="assets/arright.svg" alt="" onClick={Func.eSliderR} />
    </Right>
    </Container>
  )
}
const Container = styled.div`
display: flex;
flex-direction: column;
gap:6em;
align-items: center;
overflow: hidden;
margin-bottom: 5em;
span{
    font-size:24px;
    font-weight: 600;
    color:#e1e6f0;
    letter-spacing: .2px;
  }
  `;
const Heading = styled.div`
text-align: center;
width:100%;
margin-top: 6em;
margin-bottom: 4em;
`;
const InputSec = styled.div`
border: 1px solid #4b5166;
border-radius: 8px;
height: 30px;
max-width: 300px;
position: relative;
padding: .5em 2.6em;
padding-right: 4em;
display: flex;
justify-content: space-between;
align-items: center;
input{
    background: transparent;
    outline: none;
    border: none;
    font-weight: 500;
    color:#fff;
    font-size: 1.1rem;
    margin-left: -18px;
  }
  label{
    position: absolute;
    border: 4px solid #0f1014;
    bottom: 10px;
    left: 16px;
    letter-spacing: .2px;
    -webkit-text-stroke: 0.2px;
    background: #0f1014;
    font-size: 1rem;
    color:#4b5166;
    cursor: pointer;
    transition:transform .3s ease-in-out,
               font-size .3s ease-in-out;
}
img{
width:20px;
height:20px;
filter: invert(1);
cursor:pointer;
margin-left: -20px;
position: relative;
left: 50px;
}
`;
const Right = styled.button`
background: transparent;
border: none;
outline: none;
position: absolute;
/* bottom: 82px; */
top:355px;
padding: 0em 3em;
border:3px solid transparent;
right: -20px;
transition: transform .2s ease-in-out;
border-radius: 30%;
img{
    filter: invert(1);
    width:30px;
    height:30px;
    cursor: pointer;
    box-shadow:inset 0px 0px 8px 1px black;
    border-radius: 50%;
    padding:1em;
}
&:hover{
      transform: scale(1.2);
      filter: drop-shadow(3px 3px 2px black);
    }
`;
const Left = styled(Right)`
transform: rotateY(180deg);
right: auto;
left: -20px;
transition: transform .2s ease-in-out;
&:hover{
      transform: scale(1.2) rotateY(180deg);
      filter: drop-shadow(3px 3px 2px black);
    }
`;
const SaveBtn = styled.button`
    background: linear-gradient(93.87deg,#06204e,#02175d);
    font-size: 18px;
    font-weight: 600;
    border: none;
    max-width: 325px;
    padding: 0.8em 4.8em;
    width: 100%;
    border-radius: 8px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    pointer-events:none;
    cursor: pointer;
    a{
      text-decoration: none;
      color: #d1e8ff;
    }
    &:hover{
      transform: scale(1.03);
    }
`;
export default ConfirmProfile
