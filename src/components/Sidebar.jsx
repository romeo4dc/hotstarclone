import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { usePopup } from '../Context/Context';
import { firestore, useFirebase } from '../firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
const Sidebar = () => {
  const [user, setUser] = useState()
  const [isActive, setIsActive] = useState('home');
  const Navigate = useNavigate();
  const Sidebar = usePopup();
  const firebase = useFirebase();
  const { getDocsByQuery, users, currentUser, AuthUser } = firebase
  const { profile, setProfile, SideBarList, setLdis} = Sidebar;

  useEffect(() => {
      AuthUser()
      GetUser()
    if (!user) {
      setProfile(false)
      getDocsByQuery()
    }
  }, [])

  useEffect(()=>{
    if(!currentUser){
      AuthUser()
    }
  },)

  const GetUser=()=>{
    onSnapshot(collection(firestore, "user"),(snap)=>{
     snap.forEach((data)=>{
      setUser(data.data())
     })
    })
   }


  return (
    <>
      <Container>
        <img style={{ marginLeft: '13px', cursor: 'pointer' }} src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" alt="" onClick={() => Navigate("/")} />
        <Button onClick={() => Navigate("/subscribe")}>Subscribe <img src="/assets/arrowleft.svg" alt="" /></Button>
        <Items className='imgitems'>
          <User onClick={(e) => {
            Navigate("/myspace")
            setIsActive("myspace")
          }} className={isActive === "myspace" ? 'item filter' : undefined}>
            <ImgSec>
              {
                currentUser ?
                  <img src={
                    currentUser &&
                      profile ?
                      (currentUser && (user && user.kPhotoURL))
                      :
                      (currentUser && (user && user.photoURL))
                  } alt="" className={isActive === "myspace" ? 'block' : undefined} />
                  :
                  <img src="assets/filluser.svg" alt="" className={isActive === "myspace" ? 'block' : undefined}/>
              }
              {
                currentUser ?
                  <img src=
                    {
                      profile ?
                        (currentUser && (user && user.kPhotoURL))
                        :
                        (currentUser && (user && user.photoURL))
                    } alt="" className={isActive === "myspace" ? 'none' : undefined}/>
                  :
                  <img src="/assets/user.svg" alt=""
                  className={isActive === "myspace" ? 'none' : undefined}/>
              }
            </ImgSec>
            <span className='span'>My Space</span>
          </User>

          <Search onClick={(e) => {
            Navigate("/search")
            setIsActive("search")
          }} className={isActive === "search" ? 'item filter' : undefined}>
            <ImgSec>
              <img src="/assets/sear.svg" alt="" className={isActive === "search" ? 'block' : undefined} />
              <img src="/assets/search.svg" alt="" className={isActive === "search" ? 'none' : undefined} />
            </ImgSec>
            <span>Search</span>
          </Search>

          <Home onClick={(e) => {
            Navigate("/")
            setIsActive("home")
          }} className={isActive === "home" ? 'item filter' : undefined} >
            <ImgSec>
              <img src="/assets/fillhome.svg" alt="" className={isActive === "home" ? 'block' : undefined} />
              <img src="/assets/home.svg" alt="" className={isActive === "home" ? 'none' : undefined} />
            </ImgSec>
            <span>Home</span>
          </Home>

          <Tv onClick={(e) => {
            Navigate("/tv")
            setIsActive("tv")
          }} className={isActive === "tv" ? 'item filter' : undefined}>
            <ImgSec>
              <img src="/assets/filltv.svg" alt="" className={isActive === "tv" ? 'block' : undefined}/>
              <img src="/assets/tv.svg" alt="" className={isActive === "tv" ? 'none' : undefined}/>
            </ImgSec>
            <span>TV</span>
          </Tv>

          <Movies onClick={(e) => {
            Navigate("/movies/#cards")
            setIsActive("movies")
          }} className={isActive === "movies" ? 'item filter' : undefined}>
            <ImgSec>
              <img src="/assets/fillmovies.svg" alt="" className={isActive === "movies" ? 'block' : undefined}/>
              <img src="/assets/movies.svg" alt="" className={isActive === "movies" ? 'none' : undefined}/>
            </ImgSec>
            <span>Movies</span>
          </Movies>
          <Sports onClick={(e) => {

            Navigate("/sports")
            setIsActive("sports")
          }} className={isActive === "sports" ? 'item filter' : undefined}>
            <ImgSec>
              <img src="/assets/fillsports.svg" alt="" className={isActive === "sports" ? 'block' : undefined}/>
              <img src="/assets/sports.svg" alt="" className={isActive === "sports" ? 'none' : undefined}/>
            </ImgSec>
            <span>Sports</span>
          </Sports>
        </Items>
      </Container>
    </>
  )
}

const Container = styled.div`
        padding-top:2em;
        width: 100px;
        /* background:#0f1014; */
        background-color:transparent;
        display: inline-block;
        height:100%;
        position: fixed;
        z-index:9999999999;
        img{
          position: relative;
            width:70px;
            height:50px;
            z-index:999999999999!important;
        } 
        &::after{
          content:'';
          display: none;
          position: absolute;
          transition:all .3s ease-in-out;
          border:none;
          /* top:0; */
          left: 0px;
          height:100%;
          width: 405%;
          bottom:0;
          /* background: linear-gradient(to right ,#0f1014 43%,transparent 102%); */
          background: linear-gradient(90.43deg,rgba(15,16,20,.95) 16.24%,rgba(15,16,20,0) 98.46%);
        }
        &:hover{
          &:after{
            display:block;
          }
        }
        @media (max-width:768px) {
        display: none;
        }
          `;
const User = styled.div`
/* border:2px solid blue; */
width:fit-content;
display: flex;
align-items: center;
z-index:99999;
cursor:pointer;
span{
  transition: all .3s ease-in-out;
  pointer-events: none;
  user-select: none;
  color:hsla(0,0%,100%,.6);
  font-weight: 700;
  letter-spacing: .5px;
  margin-left: 0em;
  visibility:hidden;
  overflow:hidden;
  padding:1.5em 0em;
  /* z-index:900; */
  /* width:80px; */
  cursor: pointer;
  @media (max-width:768px) {
    display: none;
}
}
  img{
    width:22px!important;
    height:22px!important;
    cursor: pointer;
    user-select: none;
    pointer-events: none;
  }
  img:nth-child(1){
    user-select: none;
    display:none;
    pointer-events: none;
  }
  &:hover{
    span{
    visibility: visible;
    color:#fff;
    margin-left:.9em;
    transform:scale(1.11);
  }
  img{
    transform:scale(1.11);
    pointer-events: none;
  }
  img:nth-child(2){
      display: none;
    }
    img:nth-child(1){
      display:block;
    }
}

`;

const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-size: 12px;
font-weight: 500;
line-height: 14px;
border-radius: 18px;
padding: .5em .9em;
color: #ffc86bf0;
letter-spacing: .3px;
/* background: #ffcc751f; */
background: transparent;
user-select: none;
margin-top: 2px;
outline: none;
position: relative;
z-index:999999999999!important;
border:none;
cursor: pointer;
img{
  width:18px;
  height:18px;
  filter:invert(1);
  user-select: none;
  transform: rotateY(180deg);
  padding-bottom:1px;
}
`;


const ImgSec = styled.div`
/* border: 2px solid red; */
height:fit-content;
width:24px;
display: flex;
/* overflow: hidden; */
pointer-events: none;
`;
const Search = styled(User)`
`;
const Tv = styled(User)`
${ImgSec}{
  width:22.5px;
}
`;
const Home = styled(User)`

`;
const Movies = styled(User)`

`;
const Sports = styled(User)`
${ImgSec}{
  height: 30px;
  display: flex;
  gap:2px;
  align-items: center;
  width:23.5px;
  img{
  }
}
`;

const Items = styled.div`
display: flex;
flex-direction: column;
width:fit-content;
text-align: center;
/* padding:0em 2em; */
padding-left:2em;
margin-top:1.2em;
width:120px;
/* gap: 1.2em; */
&:hover{
  ${User}{
    span{
      visibility:visible;
      margin-left:.9em!important;
    }
    img:nth-child(2){
      display: none;
    }
    img:nth-child(1){
      display:block;
    }
  }
}
@media (max-width:768px) {
  border:2px solid blue;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-left:0em;
  margin:0;
  height: 50%;
background: red !important;

  /* width:0px; */
}
`;

export default Sidebar;
