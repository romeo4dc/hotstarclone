import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import MoboNavbar from './MoboNavbar';
import Sidebar from '../components/Sidebar';
import Category from '../components/Category';
import { usePopup } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFirebase } from '../firebase/firebase';
import MoboSiderBar from './MoboSiderBar';

const MoboLanguages = () => {
    const [user, setUser] = useState();
    const Func = usePopup()
    const {isPath, setIsPath} = Func;
    const fb = useFirebase()
    const { languagesData, getDocsByQuery } = fb;
    const navigate = useNavigate()

  const arr = []; 
  
    useEffect(()=>{ 
      getDocsByQuery()   
    if(languagesData){
        languagesData.forEach((data) => {
          arr.push(data.data())
        }) 
        setUser(arr)
      }
    },[!languagesData])


    return (
            <>
            <MoboNavbar />
            <Container>
                <span>Popular Languages</span>
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
    )
}

export default MoboLanguages;

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