import React from 'react'
import styled from 'styled-components';
import { useFirebase } from '../firebase/firebase'
import { useState } from 'react';
import { useEffect } from 'react';

const DisneyChannel = () => {
    const [user, setUser] = useState(null);
    const fb = useFirebase();
    const { channelsData } = fb

    const arr=[];
    useEffect(() => {
        if (channelsData) {
            channelsData.forEach((data) => {
                arr.push(data.data())
            })
            setUser(arr)
        }
    }, [channelsData])
  return (
   <Channels>
   {
    user &&
    user.map((val,ind)=>{
       return(
    <ChannelCards key={ind}>
        <img src={val.img} alt="" />
    </ChannelCards>
       )
    })
   }
   </Channels>
  )
}

export default DisneyChannel;

const Channels = styled.div`
width:100%;
display: flex;
gap:.5em;
`;
const ChannelCards = styled.div`
    width: 100px;
    height: 75px;
    border: 1px solid #ffffff75;
    border-radius: 5px;
img{
    width:100%;
    height: 100%;
    border-radius: 5px;
}
`;
