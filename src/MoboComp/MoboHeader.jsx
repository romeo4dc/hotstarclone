import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import MoboNavbar from './MoboNavbar';
import { useFirebase } from '../firebase/firebase';
import MoboSiderBar from './MoboSiderBar';
const MoboHeader = () => {
    const navigate = useNavigate();
    const fb = useFirebase()
    const Func = usePopup()
    const { sideBar, setSideBar } = Func;
    const { currentUser } = fb;
    return (
        <>
            <MoboNavbar />
            <AdHeader>
                <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-03-17/tnmpkg_deskXbb-f8a98b7c-1575-430f-89ea-bc5969e3da2f.jpg" alt="" />
                <Sub>
                    <SubLeft>
                        <img src="https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png" alt="" />
                        <div>
                            <span>Disney+ Hotstar</span><br /><span>Endless Entertainment</span>
                        </div>
                    </SubLeft>
                    <button>Subscribe</button>
                </Sub>
            </AdHeader>
            <MoboSiderBar/>
        </>
    )
}

export default MoboHeader;


const AdHeader = styled.div`
width:100%;
display: flex;
flex-direction: column;
img{
    margin: 0 auto;
    width:95%;
    border-radius:5px;
}
`;
const Sub = styled.div`
/* border:2px solid white; */
display: flex;
padding: .5em 1em!important;
justify-content: space-between!important;
button{
    color:blue;
    border: 2px solid blue;
    background: transparent;
    font-size:12px;
    padding: 0em 1.5em;
    border-radius:5px;
    letter-spacing: .3px;
    margin:.2em 0em;
}
`;
const SubLeft = styled.div`
display: flex;
gap: .5em;
align-items: center;
img{
    width:40px;
    height: 40px;
    border-radius: 5px;
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