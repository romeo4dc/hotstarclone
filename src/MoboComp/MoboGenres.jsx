import React, { useState } from 'react';
import styled from 'styled-components';
import MoboNavbar from './MoboNavbar';
import { usePopup } from '../Context/Context';
import { useEffect } from 'react';
import { useFirebase } from '../firebase/firebase';
import MoboSiderBar from './MoboSiderBar';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import Cateogory from '../components/Category';

const MoboGenres = () => {
    const [user, setUser] = useState();
    const Func = usePopup()
    const { setIsPath, isPath } = Func;
    const fb = useFirebase()
    const { genresData, getDocsByQuery } = fb;

  const arr = [];
  useEffect(()=>{
    // if(!user){
    //     getDocsByQuery()
    // }
    if(genresData){
        genresData.forEach((data) => {
          arr.push(data.data())
        }) 
        setUser(arr)
      }
    },[genresData])

    window.addEventListener('resize',(e)=>{
        if(e.target.innerWidth >= 768 && window.location.pathname === '/mobogenres'){
            setIsPath(false)
    
        }
        if(e.target.innerWidth <= 768 && window.location.pathname === '/mobogenres'){
            setIsPath(true)
        }
    })

    return (
        <>
        {
            isPath ?
            <>
            <MoboNavbar />
            <Container>
                <span>Popular Genres</span>
                <Channels>
                    {
                        user ?
                            user.map((val, ind) => {
                                return (
                                    <img src={val.img} alt="" key={ind} />
                                )
                            })
                            :
                            (
                                <div className='hloading' style={{ marginLeft: '-350px' }}>
                                    <img src="https://cdn.dribbble.com/users/347174/screenshots/2958807/media/57718cf1f96050b37782d96f41dc46d3.gif" alt="" />
                                </div>
                            )
                    }
                </Channels>
            </Container>
            <MoboSiderBar />
            </>
            :
            <><Sidebar/><Home/><Cateogory/></>
        }
        </>
    )
}

export default MoboGenres;

const Container = styled.div`
padding: .5em;
display: flex;
flex-direction: column;
gap: 1.5em;
span{
    color:#fff;
    letter-spacing: .4px;
    margin-left: .5em;
}
`;
const Channels = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
img{
    width:205px;
    height:110px;
    margin: .2em;
}
`;
