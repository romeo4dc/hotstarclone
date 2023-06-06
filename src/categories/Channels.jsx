import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useFirebase } from '../firebase/firebase';
import { useRef } from 'react';
import { Container } from '@mui/material';
const Channels = () => {
    const [hover, setHover] = useState(false);
    const [value, setValue] = useState()
    const [user, setUser] = useState()
    const carousel = useRef();
    const [width, setWidth] = useState();
    const fb = useFirebase()
    const { channelsData, getDocsByQuery, users } = fb;
    const arr = [];
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        if (channelsData) {
            channelsData.forEach((data) => {
                arr.push(data.data())
            })
            setUser(arr)
        }
    }, [channelsData])
    return (
        <BContainer>
            <motion.div ref={carousel} drag="x" dragConstraints={{ right: 0, left: -width }} onDrag={() => setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)}>
                {user &&
                    user.map((val, ind) => {
                        return (
                            <div onMouseEnter={() => {
                                setValue(ind)
                                setHover(true)
                            }
                            }
                                onMouseLeave={() => { setHover(false) }
                                } key={ind} >
                                {
                                    value === ind &&
                                        hover ?
                                        <video src={val.video} autoPlay loop muted />
                                        :
                                        <img src={val.img} alt="" />
                                }
                            </div>
                        )
                    })
                }
            </motion.div>
        </BContainer>
    )
}

export default Channels;

const BContainer = styled.div`
width:100%;
display: flex;
/* margin-bottom: 4em; */
/* gap: .5em; */
border-radius: 3px;
padding-top: 1em;
overflow: hidden;
@media(max-width:800px){
    padding-left: 20%;
}
div{
    display: flex;
    justify-content: center;
    gap: .5em;
    align-items: center;
    width: 100%;
    div{
min-width:170px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 5px;
overflow: hidden;
transition: all .25s ease-in-out;
img{
    width:175px;
    height:100%;
    transform: scale(1) !important;
    border-radius: 4px;
    &:hover{
        border-radius: 4px;
    }
}
video{
    border-radius: 4px;
    width:178px;
    height:100%;
    transform: scaleX(1.05) !important;
    border-radius: 4px;
    &:hover{
     border-radius: 4px;
    }
}
&:hover{
    transform: scaleX(1.2) scaleY(1.2);
    z-index: 99999;
}
video:nth-child(1){
    &:hover{
        margin-left:3em;
    }
}
}
}
`;
// const Cards = styled.div`
// `;
