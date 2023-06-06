import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { anim } from '../data';
import { spanim } from '../data';
import { sbanim } from '../data';
import { usePopup } from '../Context/Context';
import { useFirebase } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [opt, setOpt] = useState(true);
    const labelFunc = usePopup();
    const {setGoogleFb, googlefb,  setLoginInpDisplay,lDis, lBg, setLdis, inpBor, loginInpDisplay, label } = labelFunc;
    const OTPFunc = useFirebase();
    const {signInWithGoogle, signInWithFacebook, phoneNumber, setPhoneNumber, expandForm, setExpandForm, reqOtp, verifyOTP } = OTPFunc;

    const InputFunc = (e) => {
        if (e.target.value.length >= 10) {
            setLoginInpDisplay('block')
        } else {
            setLoginInpDisplay('none');
        }
        setPhoneNumber((`+91${e.target.value}`))
        setGoogleFb(false)
        setOpt(false)
    }

    const VerifyFunc = (e) => {
        console.log(e.target.value)
        if (e.target.value.length >= 6) {
            labelFunc.setLoginInpDisplay('block')
        } else {
            labelFunc.setLoginInpDisplay('none');
        }
    }

    return (
        <Body style={{ display: lDis, background: lBg }}>
            <Container className='pranim'>
                <Left>
                    <Columns style={{ transform: "translateX(-843%)" }}>
                        {anim.map((val, ind) => {
                            return (
                                <Card key={ind} className="ranimation">
                                    <img src={anim[ind].img} alt="" />
                                </Card>
                            )
                        })
                        }
                    </Columns>
                    <Columns style={{ transform: "translateX(0%)" }}>
                        {spanim.map((val, ind) => {
                            return (
                                <Card key={ind} className="lanimation">
                                    <img src={spanim[ind].img} alt="" />
                                </Card>
                            )
                        })
                        }
                    </Columns>
                    <Columns style={{ transform: "translateX(-843%)" }}>
                        {sbanim.map((val, ind) => {
                            return (
                                <Card key={ind} className="ranimation">
                                    <img src={sbanim[ind].img} alt="" />
                                </Card>
                            )
                        })
                        }
                    </Columns>
                </Left>
                {
                    expandForm ?
                        (
                            <Right>
                                <img src="assets/cross.svg" alt="" style={{ fontSize: '20px', color: "white", cursor: 'pointer' }} onClick={
                                    () => {
                                        setLdis("none")
                                        setExpandForm(true)
                                    }
                                }

                                />

                                <span style={{
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    color: "white"
                                }}
                                >Log in or sign up to continue</span>

                                <LoginSec>
                                    <span>+91</span>
                                    <InputSec style={{ border: inpBor }}>
                                        <input type="tel" min="0" max="100" title='Phone number' onChange={InputFunc} />
                                        <label onClick={label}>Enter mobile number</label>
                                    </InputSec>
                                    <img src="assets/cross.svg" alt="" />
                                    <Info>By proceeding you confirm that you are above 18 years of age and agree to the <span>Privacy Policy & Terms of Use.</span></Info>
                                    { opt &&
                                        <Other>
                                        <span>or</span>
                                        <span onClick={() => setGoogleFb(true)}>Have a Facebook/Email account?</span>
                                    </Other>}
                                </LoginSec>
                                {googlefb && <GoogleFb className='gfbanim'>
                                    <img src="assets/cross.svg" alt="" onClick={() => setGoogleFb(false)} className='gfbcross' />
                                    <div onClick={()=>{
                                        signInWithGoogle()
                                        setGoogleFb(false)
                                        }}>
                                        <span>Google</span>
                                    </div>
                                    <div onClick={()=>{
                                        signInWithFacebook()
                                        setGoogleFb(false)
                                        }}>
                                        <span>Facebook</span>
                                    </div>
                                </GoogleFb>}
                                <ContinueBtn type="submit" style={{
                                    display: loginInpDisplay
                                }} onClick={reqOtp} >Get OTP <img src="assets/arright.svg" alt="" />
                                </ContinueBtn>
                                <Trouble>
                                    <span>Having trouble logging in ? <a href="https://help.hotstar.com/in/en/support/search?term=login">Get Help</a></span>
                                </Trouble>
                            </Right>
                        )

                        :

                        (

                            <OTP className='otpanim'>
                                <img src="assets/cross.svg" alt="" style={{ fontSize: '20px', color: "white", cursor: 'pointer' }} onClick={
                                    () => {
                                        setLdis("none")
                                        setExpandForm(true)
                                        setLoginInpDisplay('none')
                                    }} />
                                <EnterSec>
                                    <span>Enter OTP sent to</span>
                                    <Phno>
                                        <span>{phoneNumber}</span>
                                        <Edit>
                                            <img src="assets/edit.svg" alt="" />
                                            <span>Edit</span>
                                        </Edit>
                                    </Phno>
                                    <InpSec>
                                        <input type="number" className="inpOtp" onChange={verifyOTP} />
                                    </InpSec>
                                    <RequestOTP>
                                        <Resend>
                                            <img src="assets/message.svg" alt="" />
                                            <span>Resend OTP</span>
                                        </Resend>
                                        <Recall>
                                            <img src="assets/phone.svg" alt="" />
                                            <span>Request by call</span>
                                        </Recall>
                                    </RequestOTP>
                                </EnterSec>
                                <Link to="/" style={{ textDecoration: "none" }}  ><ContinueOTPBtn type="submit" style={{ display: loginInpDisplay }}>Continue<img src="assets/arright.svg" alt="" />
                                </ContinueOTPBtn></Link>
                                <Trouble>
                                    <span>Having trouble logging in ? <a href="https://help.hotstar.com/in/en/support/search?term=login">Get Help</a></span>
                                </Trouble>
                            </OTP>
                        )
                }
                <div id="recaptcha-container"></div>
            </Container>
        </Body>

    )
}

const GoogleFb = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
justify-content: center;
position: fixed;
border-radius: 5px;
padding: 4em 2em;
height: 40%;
width: 320px;
transform: translateX(10px)!important;
position: relative;
z-index: 200;
div{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
        background: -webkit-gradient(linear,left top,right top,color-stop(30%,#ff0000ad),color-stop(10%,#0000ffb3),color-stop(66%,#ffff00a1),color-stop(90%,#008000ba));
        cursor: pointer;
        padding: .4em 1em;
        transition: all .5s;
        cursor: pointer;
        &:hover{
            transform: scale(1.03);
        }
   
    span{
        color:#fff;
        font-weight: 600;
        font-size: 1.2rem;
    }
}
div:last-child{
    background:#3b5998;
    padding: .4em 1em;
    display: flex;
    justify-content: center;
    cursor: pointer;
   span{
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
   }
}
background: white;
`;
const Body = styled.section`
/* border: 2px solid red; */
width:100%;
height:100%;
background: rgba(0,0,0,.85);
z-index: 200;
position:fixed;
/* top:50%;
left:50%;
transform:translate(-50%,-50%); */
`;
const OTP = styled.div`
padding:4em 0em;
padding-left:2em;
img:first-child{
width:30px;
height: 30px;
filter: invert(1);
position: absolute;
right:20px;
top:20px;
transition: transform .2s ease-in-out;
&:hover{
    transform: scale(1.09);
}
}
`;

const EnterSec = styled.div`
color:#e1e6f0;
font-size:18px;
font-weight:600;
display:flex;
flex-direction:column;
gap:1em;
input:first-child{
    margin-left:0;
}
input{
    border: .5px solid gray;
    height:45px;
    max-width:150px;
    letter-spacing:1em;
    font-size:1.2rem;
    font-weight:600;
    background: transparent;
    border-radius:5px;
    margin-left:.8em;
    color:white;
    text-align:center;
    
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -webkit-appearance: none;
    }
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
}
`;
const InpSec = styled.div`
display:flex;
margin-top:1em;
input{
    letter-spacing: .5em;
}
`;
const Phno = styled.div`
display:flex;
align-items:center;
width:150%;
justify-content:space-between;
span{
    color:#8f98b2;
    font-size:16px;
    font-weight:500;
}
`;
const Edit = styled.div`
display:flex;
gap: .3em;
cursor:pointer;
img{
    height:12px!important;
    width:12px!important;
    filter:invert(1)!important;
    position: unset!important;
}
span{
    font-size:10px;
    color:#8f98b2;
    font-weight:600;
}
`;
const RequestOTP = styled.div`
display:flex;
gap:1em;
cursor:pointer;
`;
const Resend = styled.div`
display:flex;
align-items:center;
gap: .6em;
img{
    height:20px!important;
    width:20px!important;
    filter:invert(1)!important;
    position: unset!important;
}
span{
    font-size:12px;
    font-size:600;
}
`;
const Recall = styled.div`
display:flex;
align-items:center;
gap: .6em;
img{
    height:20px!important;
    width:20px!important;
    filter:invert(1)!important;
    position: unset!important;
}
span{
    font-size:12px;
    font-size:600;
}
`;
const Container = styled.div`
/* border: 2px solid red; */
width:70%;
min-height: 80vh;
border-radius: 1em;
background:#16181f; 
overflow: hidden;
display: flex;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
user-select: none;
`;
const Left = styled.div`
/* border: 2px solid red; */
width:380px;
height:490px;
overflow: hidden;
position: relative;
z-index:50;
&::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    bottom: 0;
    height: 490px;
    width: 380px;
    background: linear-gradient(270deg,#16181f 6.88%,rgba(22,24,31,.64));  
}
`;
const Columns = styled.div`
display: flex;
gap: .8em;
z-index: 50;
`;
const Card = styled.div`
height: 175px;
width:fit-content;
position: relative;
display: flex;
transition: all .5s;
margin-top: .5em;
img{
    width:120px;
    height:170px;
    border-radius: 5px;
}
`;
const Right = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    gap: 1.2em;
    padding:4em 0em;
    z-index: 100;
img:first-child{
width:30px;
height: 30px;
filter: invert(1);
position: absolute;
right:20px;
top:20px;
transition: transform .2s ease-in-out;
&:hover{
    transform: scale(1.09);
}
}
&::after{
    content: "";
    position: absolute;
    top: 0;
    left: 257px;
    bottom: 0;
    height: 100%;
    width: 14%;
    background: linear-gradient(270deg,#16181f ,transparent); 
}
`;
const ContinueBtn = styled.button`
background:linear-gradient(93.87deg,#095ae6,#062794);
font-size: 18px;
font-weight: 600;
color:#d1e8ff;
padding: .8em 1em;
width:90%;
border-radius: 8px;
transition: all .3s ease-in-out;
outline: none;
border: none;
cursor: pointer;
margin-top:5.5em;
&:hover{
    transform: scale(1.02);
}
img:first-child{
    height:15px;
    width:15px;
    filter: invert(1);
    margin-bottom:-.1em;
    margin-left:.4em;
    position:relative!important;
    top:-1px!important;
    left:2px;
}
`;
const ContinueOTPBtn = styled.button`
background:linear-gradient(93.87deg,#095ae6,#062794);
font-size: 18px;
font-weight: 600;
color:#d1e8ff;
padding: .8em 1em;
width:90%;
border-radius: 8px;
transition: all .3s ease-in-out;
outline: none;
border: none;
cursor: pointer;
margin-top:3em;
margin-left:5em;
&:hover{
    transform: scale(1.02);
}
img:first-child{
    height:15px;
    width:15px;
    filter: invert(1);
    margin-bottom:-.1em;
    margin-left:.4em;
    position:relative!important;
    top:-1px!important;
    left:2px;
}
`;
const LoginSec = styled.div`
display: flex;
flex-direction: row;
gap: .8em;
position: relative;
margin-left: 3em;
span:nth-child(1){
    border: 1px solid #4b5166;
    color:#4b5166;
    padding:1em 1.4em;
    border-radius: 7px;
}
img{
width:20px;
height: 20px;
filter: invert(1);
position: absolute;
right: 15px;
top: 15px;
display: none;
}
`;
const Other = styled.div`
position: absolute;
top: 7em;
display: flex;
align-items: center;
flex-direction: column;
gap: 2em;
span:first-child{
    color:#fff;
    padding: 0;
    border: none;
    font-size: 1.3rem;
    letter-spacing: .3px;
}
span:last-child{
    color: blue;
    border: 2px solid blue;
    border-radius: .3em;
    padding: 1em 3.9em;
    margin-left:10px;
    cursor: pointer;
    font-weight: 600;
    background: #0000ff1f;
    transition: all .5s;
    &:hover{
        transform: scale(1.03);
    }
}
`;
const Info = styled.span`
color:#707a94;
font-size: 9px!important;
position: absolute;
bottom: -32px;
letter-spacing: .5px;
line-height: 12px!important;
span{
    border: none!important;
    color:#8f98b2!important;
    padding: 0!important;
    font-size: 9px!important;
    margin-top: 4px!important;
}
`;
const InputSec = styled.div`
display: flex;
align-items: center;
width:290px;
border-radius: 7px;
height: 50px;
padding-left: 1em;
position: relative;
@media (max-width: 1024px) {
    width:270px;
    transform: translateX(-6px);
  }
label{
    position: absolute;
    color:#707a94;
    letter-spacing: .5px;
    top:12px;
    transition: all .3s ease-in-out;
    border: 4px solid ;
    background:#16181f; 
    border: 4px solid #16181f;
    cursor: pointer;
}
input{
    font-size: 16px;
    font-weight: 500;
    outline: none;
    background: transparent;
    color:#fff;
    letter-spacing: .5px;
    width:110px;
    border:none;
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -webkit-appearance: none;
    }
    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
}

`;
const Trouble = styled.div`
position: absolute;
bottom: 0px;
right:0px;
padding:4em 0em;
padding-right:8em;
span{
    color:#8f98b2;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .5px;
    a{
        color:#3586f0;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: .5px;
        text-decoration: none;
        cursor: pointer;
    }
}
`;
export default Login;
