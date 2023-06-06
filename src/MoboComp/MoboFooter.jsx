import React from 'react'
import styled from 'styled-components';
const MoboFooter = () => {
  return (
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
  )
}

export default MoboFooter;

const Container = styled.footer`
/* border: 2px solid red; */
padding-top:4em;
padding-bottom: 1.5em;
width:100%;
display: flex;
flex-wrap:wrap;
justify-content: center;
gap: 7em;
color:rgba(255, 255, 255, 0.8);
`;

const Left = styled.div`
display: flex;
flex-direction: column;
width: 599px;
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
