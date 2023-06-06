import React from 'react'
import styled from 'styled-components';


//   )
// }


// export default Footer;

const FooterFunc = () => {
  return (
<>
<Footer>
<Info>
    <li >
        <span>Company</span>
        <span style={{ fontSize: '12px', color: "#8f98b2" }}>About Us</span>
        <span style={{ fontSize: '12px', color: "#8f98b2" }}>Careers</span>
    </li>
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <span>View Website in</span>
        <span style={{ fontSize: '12px', color: "#8f98b2", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', marginLeft: '-46px', marginTop: '-38px' }}> <img src="assets/check.svg" style={{ transform: 'scale(.25)', }} /><span style={{ marginLeft: '-22px', fontSize: '12px', color: "#8f98b2" }}>English</span></span>
    </li>
    <li>
        <span>Need Help?</span>
        <span style={{ fontSize: '12px', color: "#8f98b2" }}>Visit Help Center</span>
        <span style={{ fontSize: '12px', color: "#8f98b2" }}>Share Feedback</span>
    </li>
    <li>
        <span>Connect with Us</span>
        <div>
            <img src="assets/fbn.svg" alt="" />
            <img src="assets/ntwitter.svg" alt="" />
        </div>
    </li>
</Info>
<RightDesc>
    <InfoDesc>
        <FooterCont>
            <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
        </FooterCont>
        <span>Terms Of Use</span><span>Privacy Policy</span><span>FAQ</span>
    </InfoDesc>
    <Store>
        <img src="assets/gplay.png" alt="#" />
        <img src="assets/ios.png" alt="#" />
    </Store>
</RightDesc>
</Footer>
 <Container>
   <Left>
     <ul>
         <li>About Disney + Hotstar</li>
         <li>Terms Of Use</li>
         <li>Privacy Policy</li>
         <li>FAQ</li>
         <li>Feedback</li>
         <li>Careers</li>
     </ul>
     <p> &copy; 2023 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
   </Left>
   <Right>
     <LeftIcons>
         <span>Connect with us</span>
         <SocialIcons>
           <img src="assets/fb.svg" alt="" />
           <img src="assets/twitter.svg" alt="" />
         </SocialIcons>
     </LeftIcons>
     <RightIcons>
         <span>Disney+Hotstar App</span>
         <StoreIcons>
         <img src="assets/gplay.png" alt=""/>
         <img src="assets/ios.png" alt="" />
         </StoreIcons>
     </RightIcons>
   </Right>
 </Container>
</>
  )
}

export default FooterFunc;

const Footer = styled.footer`
/* border:2px solid white; */
width:100%;
@media(max-width:768px){
    display: none;
}
`;
const FooterCont = styled.div`
p{
    font-size: 12px;
    font-weight: 500;
    color:#707a94;
}
`;
const Info = styled.div`
display: flex;
gap: 15em;
padding-left:6em;
li{
display: flex;
flex-direction: column;
/* width:100%; */
padding-top: 6.2em;
gap:1em;
    span{
      font-size: 14px;
      font-weight: 500;
      color:#e1e6f0;
    }
}
li:nth-child(4){
    display: flex;
    align-items: center;
    div{
display: flex;
gap: 2em;
        img{
          width:23px;
          height:23px;
          filter: invert(2);
        }
    }
}
`;
const InfoDesc = styled.div`
padding-left:6em;
p{
    width:640px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
}
span{
    font-size: 12px;
    color:#707a94;
    line-height: 18px;
    margin-right:1em;
}
`;
const Store = styled.div`
display: flex;
align-items: center;
margin-top: -30px;
margin-right:10px;
img{
    width: 170px;
    height: 60px;
    cursor: pointer;
}
img:nth-child(1){
    height: 165px;
    width: 163px;
}
`;
const RightDesc = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Container = styled.div`
width:100%;
flex-wrap:wrap;
justify-content: center;
gap: 7em;
color:rgba(255, 255, 255, 0.8);
display: none!important;
@media(max-width:768px){
    display: flex;
}
`;
const Left = styled.div`
display: flex;
flex-direction: column;
width: 599px;
padding: 0em 1em;
ul{
display: flex;
gap: 1.1em;
margin-left: -36px;
}
li{
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    list-style: none;
}
p{
    font-size: 12px;
    line-height: 1.8;
}
`;
const Right = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 5em;
`;
const LeftIcons = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
align-items: left;
width: 120px;
img{
  width:150px;
  height: 50px;
  cursor: pointer;
  transition: all .3s ease-in-out ;
      &:hover{
        filter:invert(1);
      }
    }
    span{
  /* color:#1f80e0; */
  margin-left: 5px;
  font-size: 14px;
  color:rgba(255, 255, 255, 0.6);
  font-weight: 500;
}
`;
const SocialIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width:100px;
img:last-child{
  border: 1px solid #192133;
  background: #192133;
  height: 35px;
  width: 35px;
  padding: 4.5px;
  border-radius: 4px;
}
`;
const RightIcons = styled.div`
display: flex;
flex-direction: column;
gap: 7px;
span{
  /* color:#1f80e0; */
  font-size: 14px;
  color:rgba(255, 255, 255, 0.6);
  font-weight: 500;
  margin-left: 7px;
}
`;
const StoreIcons = styled.div`
    display: flex;
    align-items: center;
    height: 46px;
    width: fit-content;
img{
  width: 150px;
  height: 57px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover{
    filter: invert(1);
  }
}
img:nth-child(1){
  height: 160px;
  margin-right: -12px;
}
`;

