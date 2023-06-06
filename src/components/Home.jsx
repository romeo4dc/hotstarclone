import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePopup } from '../Context/Context';
import MainHome from './MainHome';
import MainMovies from './MainMovies';
import SmallSlider from './SmallSlider';
import { sliderItems } from '../data';
import { useFirebase } from '../firebase/firebase';
import Header from './Header';
import MoboHeader from '../MoboComp/MoboHeader';
let c = 0;
const Home = () => {
    const [counter, setCounter] = useState(0)
    const Func = usePopup();
    const { BottomBarList } = Func;
    const Firebase = useFirebase();
    const navigate = useNavigate();
    const { getDocsByQuery, AuthUser, HomeSlider, currentUser } = Firebase;

    useEffect(() => {
        AuthUser()
        getDocsByQuery()
        if (c <= 6) {
            let slideCont = document.querySelector('.imgcontainer')
            setInterval(() => {
                if(slideCont){
                slideCont.style.transform = `translateX(${-c * 100}%)`
                c++;
                if (c === 6) {
                    c = 0;
                }
            }
            }, 4000)
        }       
    }, [])




    return (
        <>
            <img src="assets/di.svg" className="disney" alt="" />
            <img src="assets/star.svg" className="star" alt="" />
            <img src="assets/polygon.svg" className="polygon" alt="" />
            <Mobo>
                <MoboHeader />
            </Mobo>
            <div className='maincont'>
                <Header />
                <Container className='main coveranim' onClick={Func.Main}>
                    <MainHome />
                    <Right>
                        <SmallSlider />
                    </Right>
                </Container>
            </div>
            <MoboMainHome>
                <ImgContainer className='imgcontainer' onClick={(e)=>{
                    HomeSlider(e)
                    navigate("/mshows")
                    }}>
                    {
                        sliderItems.map((val, ind) => {
                            return (
                                <img src={val.img} alt="" key={ind} className='slideimg' />
                            )
                        })
                    }
                </ImgContainer>
            </MoboMainHome>
            <MoboRes >
                <div onClick={BottomBarList}>
                    <img src="assets/home.svg" alt="" className='bottombarclass bottombaractive' onClick={() => navigate("/")} />
                    <span>Home</span>
                </div>
                <div onClick={BottomBarList}>
                    <img src="assets/tv.svg" alt=""  onClick={() => navigate("/tv")} />
                    <span>TV</span>
                </div>
                <img src="assets/di.svg" alt="" onClick={()=>navigate("/disney")}/>
                <div onClick={BottomBarList}>
                    <img src="assets/movies.svg" alt=""  onClick={() => navigate("/movies")} />
                    <span>Movies</span>
                </div>
                <div onClick={BottomBarList}>
                    <img src="assets/sports.svg" alt="" onClick={() => navigate("/sports")} />
                    <span>Sports</span>
                </div>
            </MoboRes>
        </>
    )
}
const Container = styled.div`
/* border: 2px solid red; */
margin-left: 100px;
min-height:530px;
display: flex;
align-items: end;
justify-content: space-between;
padding-bottom: 1em;
background:linear-gradient(178.5deg,rgba(15,16,20,0) 57.9%,rgba(15,16,20,.01) 64.8%,rgba(15,16,20,.05) 67.56%,#0c0d11 96.94%),linear-gradient(90deg,#01040f,rgb(7 8 15 / 85%) 16.15%,rgb(4 5 7 / 73%) 25.52%,rgba(15,16,20,.6) 32.81%,rgba(15,16,20,.05) 52.08%,rgba(15,16,20,0) 65.1%),url(https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8742/1478742-i-03dfaf5cb374) no-repeat center/cover;
/* background:url(https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8742/1478742-i-03dfaf5cb374) no-repeat center/cover; */
background-attachment: fixed!important;
position: relative;
&:after{
    content:"";
    position: absolute;
    bottom:0px;
    left:0;
    width:100%;
    height:10%;
    background:linear-gradient(180deg,rgba(15,16,20,0),#0f1014);
    z-index: 99999;
}
`;
const MoboRes = styled.div`
position: fixed;
bottom: 0;
width:100%;
height: 16%;
display: none;
z-index:99999;
justify-content: space-between;
background: #0f1014;
/* padding: 0em .1em; */
div{
display: flex;
flex-direction: column;
align-items: center;
height:50%;
margin: auto 0em;
gap:.5em;
img{
  width:60%;
  height:100%;
  @media(max-width:400px){
   width:50%;
   height:90%;
}
}
span{
  font-weight: 500;
  color:#fff;
  pointer-events: none;
  @media(max-width:450px){
    font-size: .8rem;
  }
}
}
  img{
    z-index:99999;
    height:50%;
    cursor: pointer;
    margin:auto 0em;
    @media(max-width:450px){
        height: 40%;
    }
  }
@media (max-width:768px){
  display:flex;
}
`;
const Mobo = styled.div`
display: none;
@media (max-width:768px) {
    display: block;
}
`;
const Right = styled.div`
/* border:2px solid red; */
max-width:400px;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 3px;
img:last-child{
    height: 31px;
    z-index:90000;
    width: 31px;
    filter:invert(1);
    transform: rotateY(180deg) translateX(30px);
    cursor: pointer;
}
`;
const MoboMainHome = styled.div`
display: none;
padding: .5em 0em;
overflow: hidden;
width:100%;
justify-content: center;
img:first-child{
    /* margin-left:100%; */
}
img{
    width:100%;
    height:100%;
}
@media (max-width:768px) {
    display: flex;
}
`;
const ImgContainer = styled.div`
/* border: 2px solid white; */
display:flex;
/* gap:1.5%; */
/* margin-left: .5%; */
width:100%;
/* transform:translateX(-200%); */
transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
img{
    width:100%;
    height:100%;
}
 `;
export default Home;

