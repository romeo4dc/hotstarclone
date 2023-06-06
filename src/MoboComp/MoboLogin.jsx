import React, { useState } from 'react'
import styled from 'styled-components';
import { useFirebase } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
const MoboLogin = () => {
    const [value, setValue] = useState("");
    const [dis, setDis] = useState(false);
    const [googlefb, setGoogleFb] = useState(false);
    const OTPFunc = useFirebase();
    const navigate = useNavigate();
    const { expandForm, setExpandForm,setPhoneNumber, reqOtp, verifyOTP, signInWithFacebook, signInWithGoogle } = OTPFunc;

    
    return (
        <Container>
            <img src="assets/dph.svg" alt="" />
            <LoginSec style={{ display: dis ? 'none' : 'flex' }}>
                <span>Login to continue</span>
                <LoginOpt>
                    <div onClick={()=>setGoogleFb(true)}>
                        <span>Have a Facebook/Email account?</span>
                    </div>
                    <span style={{ margin: '0 auto' }}>or</span>

                    <InputSec>
                        <span>+91</span>
                        <input type="tel" placeholder='Enter your mobile number' title="Phone number" onChange={(e) => {
                            setPhoneNumber(e.target.value)
                            setValue(e.target.value)
                            setDis(true)
                            setExpandForm(true)
                        }} />
                    </InputSec>
                </LoginOpt>
              { googlefb &&  <GoogleFb className='pranim'>
                <img src="assets/cross.svg" alt="" onClick={()=>setGoogleFb(false)}/>
                  <div onClick={()=>{
                    signInWithGoogle()
                    setGoogleFb(false)
                    }}>
                    <img src="assets/google.svg" alt="" />
                    <span>Google</span>
                  </div>
                  <div onClick={()=>{
                    signInWithFacebook()
                    setGoogleFb(false)
                    }}>
                    <img src="assets/fb.svg" alt="" />
                    <span>Facebook</span>
                  </div>
                </GoogleFb>}
            </LoginSec>
            <Wrapper style={{ transform: expandForm ? 'translateX(0)' : 'translateX(-50%)', display: dis ? 'flex' : 'none' }}>
                <OTPverify>
                    <img src="assets/bigleft.svg" alt="" onClick={() => setDis(false)} />
                    <span style={{ color: '#fff' }}>Continue using Phone</span>
                    <InputSec>
                        <span>+91</span>
                        <input type="tel" className='inp' placeholder='Enter your mobile number' title="Phone number" onChange={(e) => {
                            setPhoneNumber(`+91${e.target.value}`)
                            setValue(e.target.value)
                        }} value={value} />
                    </InputSec>
                    <button onClick={reqOtp}>CONTINUE <img src="assets/arright.svg" alt="" /></button>
                    <span style={{ color: '#fff', fontSize: '.8rem' }}>By Proceeding you agree to the <span style={{ color: '#1854ff' }}>Terms of use</span> and <span style={{ color: '#1854ff' }}>Privacy policy</span></span>
                </OTPverify>
                <VerifyOTP>
                    <img src="assets/bigleft.svg" alt="" onClick={() => setExpandForm(true)} />
                    <span>Enter the 4-digit code sent to</span>
                    <span>+91******0391</span>
                    <input type="number" onChange={verifyOTP} />
                    <button onClick={() => {
                        navigate("/")
                    }}> CONTINUE <img src="assets/arright.svg" alt="" /></button>
                </VerifyOTP>
            </Wrapper>
                <div id="recaptcha-container"></div>
        </Container>
    )
}

export default MoboLogin;

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 6em;
width:100%;
overflow: hidden;
/* padding: 0 2em; */
img{
    width:20%;
    filter: invert(1);
    padding: 1em 2em; 
}
`;
const Wrapper = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: space-between;
width:200%;
transform: translateX(-50%); 
transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
`;
const LoginSec = styled.div`
padding: 0em 2em;
display: flex;
flex-direction: column;
gap: 4em;
span{
    color:#fff;
}
`;
const LoginOpt = styled.div`
display:flex;
flex-direction: column;
gap: 2.5em;
div{
    display: flex;
    justify-content: center;
    border: 2px solid blue;
    border-radius: 6px;
    background: #0000ff29;
    span{
        color: blue;
        padding: 1em 3em;
        font-weight: 600;
        letter-spacing: .3px;
    }
}
`;
const InputSec = styled.div`
border-bottom:2px solid blue !important;
border-top: none!important;
border-left: none!important;
border-right: none!important;
display:flex;
justify-content: left!important;
gap: .5em;
background: transparent!important;
span{
    color:#fff!important;
    padding: 0!important;
    margin-bottom:.3em;
}
input{
    background: transparent;
    border: none;
    border-left: 2px solid #8f98b2;
    margin-bottom:.3em;
    outline: none;
    font-weight: 500;
    letter-spacing: .3px;
    padding: 0em .6em!important;
    color:white;
    letter-spacing: .3px;
    &::placeholder{
        color:#8f98b2;
    }
}
`;
const OTPverify = styled.div`
display: flex;
flex-direction: column;
gap: 4em;
padding: 0em 2em;
word-spacing: normal;
width: 100%;
img{
    width:20px;
    filter: unset;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: -3em;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .1em;
    color:#fff;
    background:#1854ff;
    border: none!important;
    border-radius:5px;
    margin-bottom: -4.3em;
    margin-top: -3em;
    span{
        color:#fff;    }
    img{
        width:15px;
        height: 12px;
        filter: invert(1);
        margin: 0!important;
    }
}
span{
    word-spacing: .1em;
}
`;
const VerifyOTP = styled.div`
display: flex;
flex-direction: column;
gap: 2em;
padding: 0em 2em;
width: 100%;
img{
    width:20px;
    filter: unset;
    padding-left: 0;
}
span{
    color:#fff;
    font-weight:600;
    letter-spacing: .2px;
}
input{
  border: 1px solid lightgrey;
  max-width: 50%;
  font-size: 1.2rem;
  padding: .5em 0em;
  border-radius: 5px;
  color:#fff;
  background-color: transparent;
  outline: none;
  letter-spacing: 1em;
  padding: .5em;
}
button{
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: .1em; */
    color:#fff;
    background:#1854ff;
    border: none!important;
    border-radius:5px;
    letter-spacing: .2px;
    img{
        width:10px;
        height: 9px;
        filter: invert(1);
        margin-left: .8em!important;
    }
}
`;
const GoogleFb = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
justify-content: center;
position: fixed;
border-radius: 5px;
padding: 4em 2em;
inset: 0;
margin: auto;
height: 40%;
img{
    width:20px;
    height:20px;
    filter: brightness(0.9);
    position: absolute;
    right: 0px;
    top: 0px;
    /* margin: .1   em; */
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
        background: -webkit-gradient(linear,left top,right top,color-stop(30%,#ff0000ad),color-stop(10%,#0000ffb3),color-stop(66%,#ffff00a1),color-stop(90%,#008000ba));
        cursor: pointer;

    img{
        position: relative;
        width:30px;
        height:30px;
        margin-left: -1em;
        filter: invert(1);
    }
    span{
        color:#fff;
        font-weight: 600;
        font-size: 1.2rem;
    }
}
div:last-child{
    background:#3b5998;
    img{
        width:30px;
        height:30px;
        margin-left: .5em!important;
    }
   span{
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
   }
}
background: white;
`;

