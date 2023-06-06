import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const PopUpContext = createContext(null);
export const usePopup = () => useContext(PopUpContext)
export const PopupProvider = ({ children }) => {
  const [pP, setPp] = useState("0");
  const [pH, setPh] = useState("0");
  const [tvTrf, setTvTrf] = useState("0px")
  const [tvVis, setTvVis] = useState("hidden")
  const [MTrf, setMTrf] = useState("0px")
  const [Mvis, setMVis] = useState("hidden")
  const [sTrf, setSTrf] = useState("0px")
  const [sVis, setSVis] = useState("hidden")
  const [Sbg, setSBg] = useState();
  const [colS, setSColor] = useState();
  const [Pbg, setPBg] = useState();
  const [colP, setPColor] = useState();
  const [Sdis, setSdis] = useState();
  const [Pdis, setPdis] = useState();
  const [Sbor, setSbor] = useState();
  const [Pbor, setPbor] = useState();
  const [lTrf, setLtrf] = useState();
  const [margin, setMargin] = useState(0);
  const [inpBor, setInpbor] = useState("1px solid #4b5166");
  const [lDis, setLdis] = useState("none");
  const [lBg, setLbg] = useState("")
  const [rDis, setRdis] = useState("visible");
  const [laDis, setLadis] = useState("visible");
  const [chk, setChk] = useState("none")
  const [plus, setPlus] = useState("block")
  const [cInfo, setCinfo] = useState("none")
  const [pInfo, setPinfo] = useState("none")
  const [sCross, setScross] = useState('hidden');
  const [loginInpDisplay, setLoginInpDisplay] = useState('none');

  const TvUpFunc = () => {
    setTvTrf("translateY(-13px)")
    setTvVis("visible")
    setMTrf("translateY(0px)")
    setMVis("hidden")
    setSTrf("translateY(0px)")
    setSVis("hidden")
  }
  const TvDownFunc = () => {
    setTvTrf("translateY(0px)")
    setTvVis("hidden")
  }
  const MUpFunc = () => {
    setMTrf("translateY(-13px)")
    setMVis("visible")
    setTvTrf("translateY(0px)")
    setTvVis("hidden")
    setSTrf("translateY(0px)")
    setSVis("hidden")
  }
  const MDownFunc = () => {
    setMTrf("translateY(0px)")
    setMVis("hidden")
  }
  const SUpFunc = () => {
    setSTrf("translateY(-13px)")
    setSVis("visible")
    setMTrf("translateY(0px)")
    setMVis("hidden")
    setTvTrf("translateY(0px)")
    setTvVis("hidden")
  }
  const SDownFunc = () => {
    setSTrf("translateY(0px)")
    setSVis("hidden")
  }

  const [Price, setPrice] = useState("Super");

  const Super = () => {
    setSBg('linear-gradient(180deg, #252833 0, #0f1014 100%')
    setSColor('#ffcc75')
    setPBg("")
    setPColor("")
    setPdis("none")
    setSdis("block")
    setSbor("2px solid #fff")
    setPbor("2px solid #707a94")
    setPrice("Super")
  }
  const Premium = () => {
    setPBg('linear-gradient(180deg, #252833 0, #0f1014 100%')
    setPColor('#ffcc75')
    setSBg("")
    setSColor("")
    setPdis("block")
    setSdis("none");
    setPbor("2px solid #fff")
    setSbor("2px solid #707a94")
    setPrice("Premium")
  }

  const label = (e) => {
    if (e.target.textContent === "Enter mobile number") {
      e.target.style.fontSize = "12px";
      e.target.style.transform = "translateY(-21.7px)";
      document.querySelector('input').focus()
      setInpbor("1px solid #ffffff70")
    }
  }

  const [eBg, setEbg] = useState('');
  const [edDis, setedDis] = useState('none');
  const editLabel = (e) => {
    if (e.target.textContent === "Profile Name") {
      e.target.style.fontSize = ".6rem";
      e.target.style.transform = "translateY(-24.5px)";
      document.querySelector('input').focus()
      setEbg('#727b99');
      setedDis('block')
    }
  }

  const logFunc = () => {
    setLdis("flex");
    setLbg("rgba(0,0,0,0.85)")
  }

  const Rightfunc = () => {
    setLadis('visible')
    if (margin > -400) {
      setMargin(margin - 244)
      // setMargin(0)
    }
    if (margin >= -500) {
      setRdis('hidden')
      setLadis('visible')
    }
  }
  const Leftfunc = () => {
    setRdis('visible')
    if (margin < 0) {
      setMargin(margin + 244)
      // setRdis('block')
      // setLadis('none')
    }
    if (margin === -100) {
      setRdis('visible')
      setLadis('hidden')
    }
  }

  const Chkfunc = () => {
    setChk('none')
    setPlus('block')
    setCinfo('block')
    setPinfo('none')
    setTimeout(() => {
      setCinfo('none')
    }, 500)
  }

  const Plusfunc = () => {
    setChk('block')
    setPlus('none')
    setCinfo('none')
    setPinfo('block')
    setTimeout(() => {
      setPinfo('none')
    }, 500)
  }

  const Search = (e) => {
    if (e.target.value.length >= 0) {
      setScross('visible')
    }
    if (e.target.value.length === 0) {
      setScross('hidden')
    }
  }

  const Scross = () => {
    setScross("hidden")
    document.querySelector('input').value = "";
  }
  const [sFunc, setSfunc] = useState(0)
  const SlideFunc = (e) => {
    if (e.target.classList.contains('slideImg')) {
      document.querySelector('.main').style.background = `linear-gradient(178.5deg,rgba(15,16,20,0) 57.9%,rgba(15,16,20,.01) 64.8%,rgba(15,16,20,.05) 67.56%,#0c0d11 96.94%),linear-gradient(90deg,#01040f,rgb(7 8 15 / 85%) 16.15%,rgb(4 5 7 / 73%) 25.52%,rgba(15,16,20,.6) 32.81%,rgba(15,16,20,.05) 52.08%,rgba(15,16,20,0) 65.1%),url(${e.target.src}) no-repeat center/cover`;
      setSfunc(parseInt(e.target.getAttribute('data-name')))
    }
  }

  const [bbg, setbbg] = useState();

  const Main = (e) => {
    let element = document.querySelector('.main');
    let style = window.getComputedStyle(element)
    let bgImage = style.getPropertyValue('background')
    setbbg(bgImage)
  }

  const [cs, setCs] = useState('none')
  const [csBg, setCsbg] = useState('transparent')
  const ComingBG = () => {
    if (cs === 'none') {
      setCs('block')
      setCsbg('rgba(0,0,0,0.85)')
    }
    else {
      setCs('none')
      setCsbg('transparent')
    }
  }

  const NorImg = () => {
    let All = document.querySelectorAll('img')
    for (let i = 0; i <= All.length - 1; i++) {
      All[i].style.transform = 'scale(1)'
    }
  }

  const [slTrf, setSltrf] = useState("")
  const eSliderR = (e) => {
    NorImg()
    let All = document.querySelectorAll('img')
    setSltrf("translateX(-52.85em)")
    All[10].style.transform = 'scale(1.5)'
    All[4].style.transform = 'scale(1)'
  }
  const eSliderL = (e) => {
    NorImg()
    let All = document.querySelectorAll('img')
    setSltrf("translateX(0)")
    All[4].style.transform = 'scale(1.5)'
    All[10].style.transform = 'scale(1)'
  }

  const SepImg = (e) => {
    let All = document.querySelectorAll('img')
    let ImgNo = parseInt(e.target.getAttribute('data-name'));
    if (ImgNo === 0) {
      NorImg()
      All[0].style.transform = 'scale(1.5)'
      setSltrf('translateX(35.25em)')
    }
    else if (ImgNo === 1) {
      NorImg()

      All[1].style.transform = 'scale(1.5)'
      setSltrf('translateX(26.45em)')
    }
    else if (ImgNo === 2) {
      NorImg()
      All[2].style.transform = 'scale(1.5)'
      setSltrf('translateX(17.6em)')
    }
    else if (ImgNo === 3) {
      NorImg()
      All[3].style.transform = 'scale(1.5)'
      setSltrf('translateX(8.8em)')
    }
    else if (ImgNo === 4) {
      NorImg()
      All[4].style.transform = 'scale(1.5)'
      setSltrf('translateX(0em)')
    }
    else if (ImgNo === 5) {
      NorImg()
      All[5].style.transform = 'scale(1.5)'
      setSltrf('translateX(-8.8em)')
    }
    else if (ImgNo === 6) {
      NorImg()
      All[6].style.transform = 'scale(1.5)'
      setSltrf('translateX(-17.65em)')
    }
    else if (ImgNo === 7) {
      NorImg()
      All[7].style.transform = 'scale(1.5)'
      setSltrf('translateX(-26.45em)')
    }
    else if (ImgNo === 8) {
      NorImg()
      All[8].style.transform = 'scale(1.5)'
      setSltrf('translateX(-35.25em)')
    }
    else if (ImgNo === 9) {
      NorImg()
      All[9].style.transform = 'scale(1.5)'
      setSltrf('translateX(-44.05em)')
    }
    else if (ImgNo === 10) {
      NorImg()
      All[10].style.transform = 'scale(1.5)'
      setSltrf('translateX(-52.85em)')
    }
    else if (ImgNo === 11) {
      NorImg()
      All[11].style.transform = 'scale(1.5)'
      setSltrf('translateX(-61.7em)')
    }
    else if (ImgNo === 12) {
      NorImg()
      All[12].style.transform = 'scale(1.5)'
      setSltrf('translateX(-70.5em)')
    }
    else if (ImgNo === 13) {
      NorImg()
      All[13].style.transform = 'scale(1.5)'
      setSltrf('translateX(-79.28em)')
    }
    else if (ImgNo === 14) {
      NorImg()
      All[14].style.transform = 'scale(1.5)'
      setSltrf('translateX(-88.1em)')
    }
  }

  const [eLdis, setEldis] = useState('none')
  const [eRdis, setErdis] = useState('block')

  const ElDis = () => {
    setEldis("none")
    setErdis('block')
  }
  const ErDis = () => {
    setEldis("block")
    setErdis('none')
  }

  const [profile, setProfile] = useState(true);
  const [eIp, setEip] = useState();
  const [MainInpVal, setMainInpVal] = useState("tushar")
  const [kidsInpVal, setKidsInpVal] = useState("tusgar")
  const EditInp = (e) => {
    if (e.target.value.length > 0) {
      setEip("block")
      document.querySelector('.btn').removeAttribute('disabled')
      document.querySelector('.btn').style.pointerEvents = 'unset';
      document.querySelector('.btn').style.background = "linear-gradient(93.87deg,#095ae6,#062794)"
    }
    if (e.target.value.length < 0) {
      setEip("none")
    }
    setMainInpVal(e.target.value)
  }

  const sEdit = (e) => {
    if (e.target.value.length > 0) {
      setEip("block")
      document.querySelector('.btn').removeAttribute('disabled')
      document.querySelector('.btn').style.pointerEvents = 'unset';
      document.querySelector('.btn').style.background = "linear-gradient(93.87deg,#095ae6,#062794)"
    }
    if (e.target.value.length < 0) {
      setEip("none")
    }
    setKidsInpVal(e.target.value)

  }

  const EdCross = () => {
    document.querySelector('input').value = '';
    setEip('none')
    document.querySelector('label').style.transform = 'translateX(0px)'
    document.querySelector('label').style.color = '#4b5166';
    document.querySelector('label').style.fontSize = '1rem';

  }

  const [imgSrc, setImgSrc] = useState("https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/29.png")
  const ImgSrc = (e) => {
    setImgSrc(e.target.src)
  }
  const [imgMSrc, setImgMSrc] = useState("https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/feature/profile/29.png")
  const ImgMSrc = (e) => {
    setImgMSrc(e.target.src)

  }

  const [sideBar, setSideBar] = useState(false);
  const [googlefb, setGoogleFb] = useState(false);

  const SideBarList = (e) => {
    document.querySelector('.block').classList.remove('block');
    document.querySelector('.filter').classList.remove('filter');
    document.querySelector('.none').classList.remove('none');
    document.querySelector('.span').classList.remove('span');
    e.target.classList.add('filter');
    e.target.children[0].children[0].classList.add("block");
    e.target.children[0].children[1].classList.add('none');
    e.target.children[1].classList.add('span');
  }

  const BottomBarList = (e) => {
    document.querySelector('.bottombaractive').classList.remove('bottombaractive')
    e.target.classList.add('bottombaractive')
  }

  const [isPath, setIsPath] = useState(false);

  return (
    <PopUpContext.Provider
      value={{ TvUpFunc, TvDownFunc, pP, pH, setPh, setPp, tvVis, tvTrf, MTrf, Mvis, sTrf, sVis, MUpFunc, MDownFunc, SUpFunc, SDownFunc, Premium, Super, Sbg, Pbg, colP, colS, Pdis, Sdis, Sbor, Pbor, lTrf, label, editLabel, inpBor, lDis, lBg, logFunc, setLdis, Leftfunc, Rightfunc, margin, laDis, rDis, Chkfunc, Plusfunc, chk, plus, pInfo, cInfo, Search, sCross, Scross, SlideFunc, sFunc, Main, bbg, Price, cs, csBg, ComingBG, eBg, edDis, eSliderR, eSliderL, slTrf, SepImg, eLdis, eRdis, ElDis, ErDis, eIp, EditInp, EdCross, ImgSrc, imgSrc, MainInpVal, imgMSrc, ImgMSrc, setImgMSrc, loginInpDisplay, setLoginInpDisplay, profile, setProfile, kidsInpVal, setImgSrc, sEdit, sideBar, setSideBar, googlefb, setGoogleFb, SideBarList, BottomBarList, setIsPath, isPath, setSfunc }}>
      {children}
    </PopUpContext.Provider>
  )
}