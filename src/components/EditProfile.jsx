import React from 'react'
import { usePopup } from '../Context/Context';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfileComp from './ProfileComp';
const EditProfile = () => {
    const Func = usePopup();
    const { ComingBG } = Func;
    const navigate = useNavigate();
  return (
    <Container>
       <Middle>
       <Header>
        <span style={{fontSize:'28px'}}>Edit Profile</span>
          <span style={{fontSize:'16px',color:"#3586f0", cursor:'pointer'}} onClick={()=> navigate("/myspace")}>Cancel</span>
       </Header>
       <Profile>
        <Main onClick={()=> navigate('/epro')} data-aos="fade-up">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/37.png" alt=""/>
          <span>Tushar</span>
          <img style={{
                height: '30px',
                width: '27px',
                filter: 'invert(1)',
                position: 'absolute',
                bottom: '82px',
                left: '47px',
            
          }} src="assets/edit.svg" alt="" />
        </Main>
        <Kids onClick={()=>navigate('/epro')}  data-aos="fade-up">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/35.png" alt=""/>
          <span>Kids</span>
          <img style={{
                height: '30px',
                width: '27px',
                filter: 'invert(1)',
                position: 'absolute',
                bottom: '82px',
                left: '47px',

          }} src="assets/edit.svg" alt="" />
        </Kids>
        <Coming onClick={ComingBG} data-aos="fade-up">
          <img src="assets/plus.svg" alt="" />
          <span>Coming Soon!</span>
        </Coming>
       </Profile>
      </Middle>
      <ProfileComp/>
    </Container>
  )
}

const Container = styled.div``;
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:49%;
padding-right:5em;
span:last-child{
  transition:all .3s ease-in-out;
  &:hover{
    transform: scale(1.03);
  }
}
span{
  color:#cad2e5;
  font-size: 20px;
  font-weight: 600;
  img{
    height: 19px;
    width: 20px;
    filter: invert(1);
  }
}
`;
const Profile = styled.div`
display: flex;
justify-content: center;
gap: 4em;
width:100%;
img{
  border-radius: 50%;
  width:120px;
  height:120px;
  opacity:.7;
}
`;
const Middle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height:600px;
align-items: end;
gap:14em;
`;
const Main  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:1.4em;
transition: transform .2s ease-in-out;
position: relative;
cursor: pointer;
span{
  color:#cad2e5;
  font-size: 14px;
  font-weight: 600;
}
&:hover{
  transform: scale(1.1);
}
`;
const Kids  = styled(Main)`
`;
const Coming  = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:1.4em;
cursor: pointer;
span{
  color:#cad2e5;
  font-size: 14px;
  font-weight: 600;
}
img{
  border:none;
  width:30px;
  height:30px;
  padding: 2.8em;
  background: #252833;
}
`;
export default EditProfile;
