import React, { useState } from 'react'
import styled from 'styled-components';
import MoboNavbar from './MoboNavbar';
import { Lang } from '../data';
import MoreLikeThis from '../categories/MoreLikeThis';
import { useEffect } from 'react';
import { firestore, useFirebase } from '../firebase/firebase';
import FooterFunc from '../components/Footer';
import axios from 'axios';
import { usePopup } from '../Context/Context';
import { useNavigate, useParams } from 'react-router-dom';
const MoboShows = () => {
    const [value, setValue] = useState(0)
    const [data, setData] = useState(null)
    const fb = useFirebase();
    const { getDocsByQuery, currentUser } = fb;
    const Func = usePopup();
    const { sideBar, setSideBar } = Func;
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        getDocsByQuery()
    }, [])

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const userData = [];
                const details = await axios.get(`http://www.omdbapi.com?i=${params.imdbID}&apiKey=5b411b8a&plot=full`)
                userData.push(details.data)
                setData(userData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchDetails()
    }, [])

    return (
        <>
            <Container>
                <MoboNavbar />
                {data && data.map((val) => {
                    return (
                        <Main style={{ background: `url(${val.Poster}) no-repeat center/cover` }} key={val.imdbID *7}>
                            <Watch>
                                <span>SUBSCRIBER</span>
                                <div>
                                    <img src="/assets/play.svg" alt="" />
                                    <span> <span>{val.Title} </span>- Watch</span>
                                </div>
                            </Watch>
                        </Main>
                    )
                })
                }
                <Languages>
                    {
                        Lang.map((val, ind) => {
                            return (
                                <span key={ind} className={value === ind ? 'langActive' : 'undefined'} onClick={() => setValue(ind)}>{val}</span>
                            )
                        })
                    }
                </Languages>
                <Description>
                    {
                        data && data.map((val) => {
                            return (
                                <>
                                <span style={{ display: 'flex' }} key={val.imdbID *2}>
                                    <span
                                        style={{
                                            color: 'blue',
                                            fontSize: '.8rem'
                                        }} key={val.imdbID *3}>{`${val.Genre}`}
                                    </span>
                                </span>

                    <span
                        style={{
                            color: '#fff',
                            display: 'flex',
                            fontSize: '.85rem'
                        }} key={val.imdbID *4}>
                        <span>{val.Year}</span>
                        <img
                            src="/assets/dot.svg"
                            alt=""
                            style={{
                                filter: 'invert(1)',
                                width: '15px',
                                height: '15px'
                            }} /><span>{val.Website}</span>
                            </span>
                            

                    <span 
                    style={{ 
                        color: '#fff', 
                        fontSize: '.8rem' }} key={val.imdbID *5}>{val.Plot}</span>
                    </>
                            )
                        })
                    }
                    <Social>
                        <img src="/assets/plus.svg" alt="" />
                        <img src="/assets/fb.svg" alt="" />
                        <img src="/assets/twitter.svg" alt="" />
                        <img src="/assets/link.svg" alt="" />
                    </Social>
                </Description>
                <TrailersExtras>

                    <span>Trailers & Extras</span>
                    {
                        data && data.map((val,ind) => {
                            return (
                                <Trailer style={{ background: `url(${val.Poster}) no-repeat center/cover` }} key={ind*3}>
                                    <div>
                                        <img src="/assets/play.svg" alt="" style={{
                                            width: '18px',
                                            height: '18px'
                                        }} />
                                        <span><span>{val.Title} </span>- Trailer</span>
                                    </div>
                                    <span style={{ 
                                        color: '#fff', 
                                        fontSize: '.7rem', 
                                        fontWeight: '500', 
                                        position: 'absolute', 
                                        right: '10px', 
                                        top: '10px' }}>1 min</span>
                                </Trailer>
                            )
                        })
                    }
                </TrailersExtras>
                <div style={{ paddingLeft: '1em', width: '100%', paddingTop: '2.5em' }}>
                    <MoreLikeThis />
                </div>
                <FooterFunc />
            </Container>
            <MoboSideBar className={sideBar ? 'sidebar' : null}>
                <LogIn onClick={
                    () => {
                        navigate(currentUser ? "/mobologout" : "/mobologin")
                        setSideBar(false)
                    }
                }
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        {currentUser ?
                            <img
                                src={currentUser.photoURL}
                                style={{ filter: 'unset' }} alt="" />
                            :
                            <img src="assets/humanuser.svg" alt="" />
                        }
                        <div>
                            {currentUser ?
                                <>
                                    <span>{currentUser.displayName}</span>
                                    <span
                                        style={{
                                            color: '#8f98b2',
                                            fontWeight: '500',
                                            letterSpacing: '.5px'
                                        }}>Logged in via Google</span>
                                </>
                                :
                                <>
                                    <span>Log in</span>
                                    <span
                                        style={{
                                            color: '#8f98b2',
                                            fontWeight: '500',
                                            letterSpacing: '.5px'
                                        }}>Logged in via Google</span>
                                </>
                            }
                        </div>
                    </div>
                    <img src="/assets/arright.svg" alt="" />
                </LogIn>
                <WatchList>
                    <span>Watchlist</span>
                </WatchList>
                <Items>
                    <li onClick={() => navigate("/mobochannels")}>
                        <img src="/assets/channel.svg" alt="" /><span>Channels </span>
                    </li>
                    <li>
                        <img src="/assets/lang.svg" alt="" />
                        <span>Languages </span>
                    </li>
                    <li>
                        <img src="/assets/genres.svg" alt="" />
                        <span>Genres </span>
                    </li>
                </Items>
            </MoboSideBar>
            <SideBarBackground className={sideBar ? 'sidebarbg' : null} onClick={() => setSideBar(false)}>
            </SideBarBackground>
        </>
    )
}

export default MoboShows;

const Container = styled.div`
width:100%;
overflow: hidden;
`;
const TrailersExtras = styled.div`
width:340px;
height:180px;
padding-left: 1em;
margin-top: 2em;
span{
    color:#fff;
    font-weight: 600;
}
`;
const Trailer = styled.div`
display: flex;
position: relative;
border-radius: 5px;
height: 90%;
margin-top: .5em;
background: url("https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/311/1500311-h-e75aa3ca5e6d") no-repeat center/cover;
div{
    position: absolute;
    bottom: 8px;
    left: 8px;
    display: flex;
    align-items: center;
    gap: .5em;
    span{
        color:#fff;
        font-size: .85rem;
        font-weight:600;
    }
}
`;
const Main = styled.div`
position: relative;
/* border:2px solid red; */
width:100%;
height:400px;
background: url("https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/sources/r1/cms/prod/311/1500311-h-e75aa3ca5e6d") no-repeat center/cover;
`;
const Watch = styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap: 1em;
bottom:15px;
left: 25px;
span{
    color:yellow;
    font-size: .6rem;
    font-weight: 600;
    margin-left: 2.5em;
}
div{
    display: flex;
    align-items: center;
    gap:.3em;
    img{
     width:20px;
     height: 20px;      
    }
    span{
        font-size: 1rem!important;
        color:#ffffff!important;
        -webkit-text-stroke:.3px;
        letter-spacing: .5px;
        font-weight:500;
        margin-left: 0!important;
    }
}
`;
const Languages = styled.div`
border-bottom: 2px solid #80808054;
height:fit-content;
display:flex;
gap:1em;
padding: .6em .8em;
span{
    color: #8f98b2;
    font-size:1rem;
    padding: .5em;
}
`;
const Description = styled.div`
padding-top: .5em;
display: flex;
flex-direction: column;
gap: .6em;
padding-left: 1em;
`;
const Social = styled.div`
display: flex;
gap:1.5em;
img{
    height: 30px;
    width:30px;
}
img:last-child{
    filter: invert(1);
}
`;
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
