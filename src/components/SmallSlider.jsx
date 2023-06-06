import React from 'react'
import { sliderImg } from '../data';
import { usePopup } from '../Context/Context';
import styled from 'styled-components';
const SmallSlider = () => {
    const Func = usePopup()
    const { SlideFunc, margin, laDis, rDis, Rightfunc, Leftfunc } = Func;

  return (
    <>
       <Slider className='imgs' onClick={SlideFunc}>
                    <img className="slideImg" style={{ marginLeft: margin + 'px'}} src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8742/1478742-i-03dfaf5cb374" alt="" data-name="0"/>
                {sliderImg.map((val,ind)=>{
                    const {img,id} = val;
                    return(
                    <img className="slideImg" src={img} alt="#" key={id} data-name = {id}/>
                    )
                })}
                </Slider>
                <img src="assets/arrowleft.svg" alt="" className='left' onClick={Leftfunc} style={{ visibility: laDis }} />
                <img src="assets/arrowleft.svg" alt="" className='right' onClick={Rightfunc} style={{ visibility: rDis, zIndex:'999999' }} />
    </>
  )
}

const Slider = styled.div`
overflow-x: clip;
display: flex;
/* overflow-y: hidden; */
width:340px;
height: fit-content;
/* border:2px solid green; */
transition: all .3s ease-in-out;
gap: .6em;
position: relative;
z-index:999999;
&:after{
    content: "";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:500;
    background:linear-gradient(88deg, #000000 1.62%,rgba(15,16,20,0) 10.33%);
}
&:before{
    content: "";
    position: absolute;
    top:0;
    z-index: 600;
    right: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(269.25deg, #000000 -0.38%,rgba(15,16,20,0) 10.33%);
}
img{
    transition: all .3s ease-in-out;
    border-radius: 4px;
    height: 50px!important;
    width:90px!important;
    filter:none!important;
    transform: rotateY(0deg)!important;
    user-select: none;
    z-index:600;
    cursor: pointer;
    opacity:.55;
    &:hover{
    transform: scale(1.1) translateY(-14px) !important;
    border: 1px solid #fff;
    opacity:1;
    }
}
@media(max-width:835px){
    display: none;
}
`;
export default SmallSlider;
