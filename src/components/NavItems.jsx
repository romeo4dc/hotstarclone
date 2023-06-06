import React from 'react'
import { useNavigate } from 'react-router-dom';
import { usePopup } from '../Context/Context';
const NavItems = () => {
  const Navigate = useNavigate();
  const popup = usePopup();
  const { TvUpFunc, MUpFunc, SUpFunc, SDownFunc } = popup;
  const navFunc=(e)=>{
    let Items = document.querySelector('.listitems')
   if(e.target.classList.contains('item')){
    Items.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')
   }
  }
  return (
    <ul className='listitems' onClick={navFunc}>
   <li onMouseEnter={TvUpFunc}  className='item active' onClick={() => {Navigate("/tv")} }>TV</li>
   <li onMouseEnter={MUpFunc}  className='item' onClick={() => {Navigate("/movies")} }>Movies</li>
   <li onMouseEnter={SUpFunc}  className='item' onClick={() => {Navigate("/sports")} }>Sports</li>
   <li onMouseEnter={SDownFunc}  className='item'>Disney+</li>  
    </ul>
  )
}

export default NavItems;
