import React, { useState } from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar';
import FooterFunc from './Footer';
import { logoutData } from '../data';
import { usePopup } from '../Context/Context';
import LogoutConfirm from './LogoutConfirm';

const Logout = () => {
    const [value, setValue] = useState()
    const Func = usePopup()
    const {ComingBG, csBg, cs} = Func
  return (
    <>
     <Sidebar/>
      <Container>
     <Left>
        <Options>
        <Head>
            <span>Help & settings</span>
        </Head>
        {
           logoutData.map((val, ind)=>{
            return (
                <Sub className={value === ind ? "logoutactive" : undefined} onClick={()=>setValue(ind)} key={ind}>
                <Opt>
                <img src={val.img} alt="" style={{filter:'invert(1)'}} />
                <div>
                    <div><span>{val.main}</span></div>
                    <div><span>{val.sub}</span></div>
                    </div>
                </Opt>
                <img src="assets/arright.svg"  style={{width:'14px', height:'14px', filter:'invert(1)'}} alt="" />
            </Sub>
            )
           })
        }
          
        </Options>
        <Loggedout onClick={ComingBG}>
            Log Out
        </Loggedout>
     </Left>
     <Middle>
      <div></div>
     </Middle>
     <Right>
     <First>
     <Subscribe>
        <span>Subscribe to enjoy Disney+ <br/>Hotstar</span>
        <SubBtn>
            Subscribe
        </SubBtn>
     </Subscribe>
     <Mobile>
        <div>
            <span>Registerd Mobile Number</span><br/>
            <span>+91 8********1</span>
        </div>
        <Update>Update</Update>
     </Mobile>
     </First>
     <ThisDevice>
        <span>This Device</span>
        <Web>
        <WebWrapper>
            <img src="assets/laptop.svg" alt="" />
            <div>
                <div><span>Web Browser</span></div>
                <div><span>Last active on : <span>06/04/23</span></span></div>
            </div>
            </WebWrapper>
            <WebLogout>
                Log Out
            </WebLogout>
        </Web>
     </ThisDevice>
     <OtherDevices>
     <span>Other Devices</span>
        <Other>
        <OtherWrapper>
            <img src="assets/laptop.svg" alt="" />
            <div>
                <div><span>Edge Browser on Windows</span></div>
                <div><span>Last active on : <span>13/03/23</span></span></div>
            </div>
            </OtherWrapper>
            <OtherLogout>
                Log Out
            </OtherLogout>
        </Other>
     </OtherDevices>
     </Right>
     <LogoutConfirm/>
    </Container>
    <div style={{marginLeft:'1em'}}><FooterFunc/></div>
    </>
  )
}
const Container = styled.div`
display: flex;
justify-content: space-between;
`;
const Left = styled.div`
margin-left: 100px;
display:flex;
flex-direction:column;
justify-content: space-between;
min-height:480px!important;
padding-bottom:10em;
`;
const Head = styled.div`
margin-top:3em;
margin-bottom:2em;
margin-left:1em;
span{
    color:#e1e6f0;
    font-size:24px;
    font-weight:600;
    letter-spacing: -0.2px;
}
`;
const Options = styled.div`

`;
const Sub = styled.div`
/* border: 1px solid rgba(225,230,240,0.5); */
display:flex;
justify-content:space-between;
align-items:center;
padding:1em 1.2em;
border-radius:8px;
cursor: pointer;
/* background-color: hsla(0,0%,100%,0.04); */
`;
const Opt = styled.div`
display:flex;
gap:1.5em;
img{
    width:32px;
    height:32px;
}
margin-right: 4.8em;
div:first-child{
    span{
        font-size:14px;
        color:#e1e6f0;
        font-weight: 600;
    }
}
div{
    span{
        color:#8f98b2;
        font-size: 12px;
    }
}
`;
const Parental = styled(Sub)`
border-bottom:1px solid rgba(225,230,240,0.15);
border-top:none;
border-color: transparent;
background-color: transparent;
`;
const Popt = styled(Opt)`
`;
const Help = styled(Sub)`
border: none;
background-color: transparent;
`;
const Sopt = styled(Opt)``;
const Loggedout = styled.button`
color:#fff;
background:hsla(0,0%,100%,.08);
font-size:16px;
font-weight:600;
border: none;
margin-left:1.3em;
outline:none;
height:45px;
width:170px;
border-radius:.5em;
transition: all .3s ease-in-out;
cursor:pointer;
&:hover{
    background:hsla(0,0%,100%,.3);
    transform: scale(1.02);
}
`;
const Right = styled.div`
width:50%;
display:flex;
padding:4em;
flex-direction: column;
justify-content: space-between;
min-height:480px;
`;
const Middle = styled.div`
width:1px;
/* margin:0em 2em; */
/* margin-left:3em; */
margin-right:-2em;
background: linear-gradient(180deg,rgba(112,122,148,0),#707a94 50%,rgba(112,122,148,0));
`;
const First = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
gap:2em;
margin-bottom:2.5em;
/* height:20px; */
`;
const ThisDevice = styled.div`
/* border:2px solid red; */
display:flex;
flex-direction: column;
gap:3em;
span{
    color:#e1e6f0;
    font-size: 18px;
    font-weight: 600;
}
`;
const OtherDevices = styled(ThisDevice)``;
const Web = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding:1em 2em;
border-radius: 10px;
transition: all .2s ease-in-out;
&:hover{
    background:hsla(0,0%,100%,.1);
}
`;
const WebWrapper = styled.div`
display:flex;
gap: 1.5em;
img{
    height:32px;
    width:32px;
    filter:invert(1);
}
div{
    div{
        span{
            font-size:16px;
            font-weight:500;
        }
    }
    div:last-child{
        span{
            font-size:14px;
            font-weight:400;
            color:#8f98b2;
        }
    }
}
`;
const Other = styled(Web)``;
const WebLogout = styled.button`
color:#fff;
outline: none;
border:none;
font-size:16px;
font-weight:600;
background:hsla(0,0%,100%,.08);
border-radius: .5em;
height:53px;
width:110px;
cursor:pointer;
transition: all .3s ease-in-out;
&:hover{
    background:hsla(0,0%,100%,.3);
    transform: scale(1.02);
}
`;
const OtherWrapper = styled(WebWrapper)``;
const OtherLogout = styled(WebLogout)``;
const Subscribe = styled.div`
max-width:fit-context;
display: flex;
justify-content: space-between;
align-items: center;
span{
    color:#fff;
    font-size:20px;
    font-weight:600;
}
`;
const SubBtn = styled.button`
height:45px;
width:100px;
color:#fff;
background:hsla(0,0%,100%,.08);
outline:none;
border: none;
border-radius:.5em;
font-size:14px;
font-weight:600;
transition: all .3s ease-in-out;
cursor: pointer;
&:hover{
    transform:scale(1.02)
}
`;
const Mobile = styled(Subscribe)`
div{
    display:flex;
    flex-direction: column;
    justify-content:center;
    span{
        color:#fff;
        font-size:12px;
        font-weight:500;
        color: hsla(0,0%,100%,.84);
    }
    span:last-child{
        font-size: 18px;
        font-weight: 600;
        letter-spacing:2px;
        margin-top:-10px;
    }
}
`;
const Update = styled.button`
font-size:14px;
font-weight:600;
background:transparent;
outline: none;
border:none;
color:#fff;
`;



export default Logout;
