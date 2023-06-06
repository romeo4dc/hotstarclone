import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Left>
                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-03-17/tnmpkg_deskXbb-f8a98b7c-1575-430f-89ea-bc5969e3da2f.jpg" alt="" />
                <Divider></Divider>
            </Left>
            <Right>
                <Top>
                    <Heading>
                        <img src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png" alt="" />
                        <div>
                            <span>Disney+ Hotstar</span><br/><span>Binge-worthy Watchlist</span>
                        </div>
                    </Heading>
                    <Intro>
                        <span>Your one-stop destination for Comedy, Drama, Thrillers<br/> & more! </span>
                    </Intro>
                </Top>
                <Bottom>
                    <button onClick={()=>navigate('/subscribe')}>Subscribe</button>
                </Bottom>
            </Right>
        </Container>
    )
}

export default Header;

const Container = styled.div`
display: flex;
background: #16181f;
`;
const Left = styled.div`
margin-left: 100px;
position: relative;
max-width:590px;
img{
    width:100%;
    height:250px;
}
`;
const Heading = styled.div`
display:flex;
gap:.6em;
img{
    width:40px;
    height:40px;
}
div{
    span{
        color:#fff;
        font-size:14px;
        font-weight:500;
    }
    span:last-child{
        font-size:12px;
        font-weight: 400;
        color:#8f98b2;
    }
}
`;
const Intro = styled.div`
span{
    font-size: 14px;
    font-weight: 400;
    color:#e1e6f0;
}
`;
const Right = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 2em 1.2em;
`;
const Divider = styled.div`
    background: linear-gradient(272deg,#101014,rgba(16,16,20,0.723) 25.39%,rgba(16,16,20,0.36) 50.5%,rgba(22,24,31,0.1) 77.05%,rgba(16,16,20,0.093) 77.06%,rgba(16,16,20,0));
    height: 100%;
    position: absolute;
    width: 100px;
    right: 0;
    top: 0px;
`;
const Top = styled.div``;
const Bottom = styled.div`
button{
    font-size: 16px;
    font-weight: 600;
    color:#e1e6f0;
    background: #252833;
    border: none;
    outline: none;
    padding: .6em 2em;
    border-radius:8px;
    transition: all .3s ease-in-out ;
    cursor: pointer;
    &:hover{
        transform: scale(1.03);
    }
}
`;
