import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../firebase/firebase';
import { usePopup } from '../Context/Context';

const MoboSiderBar = () => {
    const navigate = useNavigate();
    const Func = usePopup();
    const fb = useFirebase();
    const { currentUser } = fb;
    const { sideBar, setSideBar, setIsPath } = Func;
    return (
        <>
            <MoboSideBar className={sideBar ? 'sidebar' : null}>
                <LogIn onClick={
                    () => {
                        navigate(currentUser ? "/mobologout" : "/mobologin")
                        setIsPath(true)
                        setSideBar(false)
                    }
                }>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        { currentUser ?
                         currentUser.photoURL ?
                           ( <img src={currentUser.photoURL} style={{ filter: 'unset' }} alt="" />)
                            :
                            (<img src="assets/humanuser.svg" alt="" />)
                            :
                            (<img src="assets/humanuser.svg" alt="" />)
                        }
                        <div>
                            {currentUser ?
                                <>
                                    <span>{currentUser.displayName}</span><span style={{ color: '#8f98b2', fontWeight: '500', letterSpacing: '.5px' }}>{

                                        currentUser.email ? 
                                        <span style={{ color: '#8f98b2', fontWeight: '500', letterSpacing: '.5px' }}> Logged in via Google</span>
                                            :
                                        <span style={{ color: '#8f98b2', fontWeight: '500', letterSpacing: '.5px' }}>Logged in via Phone</span>

                                    }
                                    </span>
                                </>
                                :
                                <>
                                    <span>Log in</span><span style={{ color: '#8f98b2', fontWeight: '500', letterSpacing: '.5px' }}>For a better experience</span>  
                                </>
                            }
                        </div>
                    </div>
                    <img src="assets/arright.svg" alt="" />
                </LogIn>
                <WatchList>
                    <span>Watchlist</span>
                </WatchList>
                <Items>
                    <li onClick={
                        () => {
                            navigate("/mobochannels")
                            setSideBar(false)
                            setIsPath(true)
                        }}><img src="assets/channel.svg" alt="" /><span>Channels </span></li>

                    <li onClick={
                        () => {
                            navigate("/mobolanguages")
                            setSideBar(false)
                            setIsPath(true)
                        }}><img src="assets/lang.svg" alt="" /><span>Languages </span></li>

                    <li onClick={
                        () => {
                            navigate("/mobogenres")
                            setSideBar(false)
                            setIsPath(true)
                        }}><img src="assets/genres.svg" alt="" /><span>Genres </span></li>
                </Items>
            </MoboSideBar>
            <SideBarBackground className={sideBar ? 'sidebarbg' : null} onClick={() => setSideBar(false)}>
            </SideBarBackground>
        </>
    )
}

export default MoboSiderBar;
const MoboSideBar = styled.div`
/* border: 2px solid red; */
height: 100%;
width:85%;
position: fixed;
top:0;
background: #0f1014;
transform: translateX(-40em);
transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
z-index: 200 ;
`;
const LogIn = styled.div`
border-bottom: 2px solid #8f98b224;
display: flex;
/* width:100%; */
justify-content: space-between;
align-items: center;
padding:1em 1.5em;
div{
    gap: 1em;
    img{
        width:35px;
        height:35px;
        border-radius: 50%;
        border: 2px solid #000000;
        /* padding: .5em; */
    }
    div{
        display: flex;
        flex-direction: column;
        gap: .2em;
        span{
            color:#fff;
            font-weight:600;
        }
        
    }
}
    img{
    filter: invert(1);
    width:20px;
    height:20px;
}
`;
const WatchList = styled.div`
border-bottom: 2px solid #8f98b224;
padding: 1em 1.5em;
span{
    color:#fff;
}
`;
const Items = styled.div`
display: flex;
flex-direction: column;
gap: 2.5em;
padding: 1em 0em;
li{
    list-style: none;
    display: flex;
    img{
        width:20px;
        height:20px;
        margin: 0 1em;
        margin-left: 1.5em;
        filter: contrast(0);
    }
    span{
        color: #fff;
    }
}
`;
const SideBarBackground = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
z-index: 100;
background: #000000a1;
display: none;
`;
