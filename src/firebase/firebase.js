import { initializeApp } from 'firebase/app';
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { createContext, useContext, useState, useEffect } from 'react';
import {collection, getDocs, getFirestore, query, addDoc, doc, updateDoc, onSnapshot,} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyABeCFdUU_ZghCsk2584z5uzQNJ0Qf0UmI",
  authDomain: "hotstarclone-11b15.firebaseapp.com",
  projectId: "hotstarclone-11b15",
  storageBucket: "hotstarclone-11b15.appspot.com",
  messagingSenderId: "602188400901",
  appId: "1:602188400901:web:38d8f8aa6b2652c0a9cf6c",
  measurementId: "G-M8TYNF8XNQ"
};
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
export const firestore = getFirestore(app)
const storage = getStorage(app);

const FBcontext = createContext(null)
export const useFirebase = () => useContext(FBcontext)
export const FirebaseProvider = ({children}) =>{
  const cc = "+91";
  const [phoneNumber, setPhoneNumber] = useState(cc);
  const [expandForm, setExpandForm] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [plusData, setPlusData] = useState("");
  const [bharatData, setBharatData] = useState("");
  const [actionData, setActionData] = useState("");
  const [bestInSportsData, setBestInSportsData] = useState("");
  const [channelsData, setChannelsData] = useState("");
  const [allChannelsData, setAllChannelsData] = useState("");
  const [genresData, setGenresData] = useState("");
  const [languagesData, setLanguagesData] = useState("");
  const [users, setUsers] = useState("");
  const [number, setNumber] = useState("");
  const [OTP, setOTP] = useState('');
  const [user, setUser] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showsData, setShowsData] = useState();
  const auth = getAuth();
  
  const generateRecaptcha=()=>{
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{
          'size':'invisible',
          'callback':(response)=>{
          
          }
      },authentication);
  }

  const reqOtp=(e)=>{
  e.preventDefault();
      setExpandForm(false)
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phoneNumber, appVerifier ).then(confirmationResult => {
        window.confirmationResult = confirmationResult;
      }).catch((err)=>{
          console.log(err)
      })
}
const verifyOTP=(e)=>{
  let otp = e.target.value;
  setOTP(otp)
  if(otp.length == 6){
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp).then((result)=>{
      const user = result.user;
      setUser(user.data())
    }).catch((error)=>{
      console.log('error')
    })
  }
}

// !Google Authentication

    
const signInWithGoogle = () => { 
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        // setUser(user.data())
    })
    .catch((err) => {
        console.log("error", err);
    })
}

const signInWithFacebook = () => {
  const fbprovider = new FacebookAuthProvider();
   signInWithPopup(auth, fbprovider)
      .then((result) => {
          const user = result.user;
          // setUser(user.data())
      })
      .catch((err) => {
          console.log(err)
      })
}

const AuthUser=()=>{
  const User = auth.currentUser;
  setCurrentUser(User)
  if(currentUser){
  if(currentUser.phoneNumber){
    let firstNumber = currentUser.phoneNumber.split("")[3];
    let lastNumber = currentUser.phoneNumber.split("")[12]
  setNumber(firstNumber +"********"+ lastNumber)
}
if(currentUser.email){
  let Email = currentUser.email.split("");
  setUserEmail(Email[0]+"**********"+Email[Email.length-11]+"@gmail.com")
}
}
}
    const getDocsByQuery = async () => {
        const plusRef = collection(firestore, "starplus");
        const bharatRef = collection(firestore, "starbharat");
        const actionRef = collection(firestore, "action");
        const bestinsportsRef = collection(firestore, "bestinsports");
        const channelsRef = collection(firestore, "channels");
        const showsRef = collection(firestore, "shows");
        const allChannelsRef = collection(firestore,"allchannels");
        const genresRef = collection(firestore,"genres");
        const languagesRef = collection(firestore,"popularlanguages");

        const plus = query(plusRef);
        const bharat = query(bharatRef);
        const action = query(actionRef);
        const bestInSports = query(bestinsportsRef);
        const channels = query(channelsRef);
        const shows = query(showsRef);
        const allChannels = query(allChannelsRef);
        const genres = query(genresRef);
        const languages = query(languagesRef);

        const starPlusSnap = await getDocs(plus);
        const starBharatSnap = await getDocs(bharat);
        const actionSnap = await getDocs(action);
        const bestinsportsSnap = await getDocs(bestInSports);
        const channelsSnap = await getDocs(channels);
        const showsSnap = await getDocs(shows);
        const allChannelsSnap = await getDocs(allChannels);
        const genresSnap = await getDocs(genres);
        const languagesSnap = await getDocs(languages);
        
        setPlusData(starPlusSnap);
        setBharatData(starBharatSnap);
        setActionData(actionSnap);
        setBestInSportsData(bestinsportsSnap);
        setChannelsData(channelsSnap);
        setShowsData(showsSnap);
        setAllChannelsData(allChannelsSnap);
        setGenresData(genresSnap);
        setLanguagesData(languagesSnap);      
      }
      const storageRef = ref(storage, 'action');


      const [showsDesc, setShowsDesc] = useState();
      const [showsArr, setShowsArr] = useState();
      const [showsImg, setShowsImg] = useState();
      // const FuncShows=async(e)=>{
      //   setShowsImg(e.target.children[1].src)
        // setShowsDesc(e.target.children[3].children[1].textContent)
      // }
      const updateData = async (e) => { 
        const result = doc(firestore, "shows" , "ADAma7RMCIYLBsV2SGUa")
        
        if(e.target.classList.contains('cards')){
        await updateDoc(result,{
          img:e.target.children[0].src,
          desc:e.target.children[1].children[1].children[2].textContent,
          subtitle:e.target.children[1].children[1].children[1].textContent,
          title:e.target.children[1].children[1].children[0].textContent,
        })
      }
      }

      const moboUpdate = async (e) => {
        const result = doc(firestore,"moboshows" , "eQZ3oZs2WaXuEsRD0jk4")
      console.log(e.target)
      await updateDoc(result, {
        img:e.target.src
      })
      }

      const HomeSlider = async (e) => {
         const result = doc(firestore,"moboshows", "eQZ3oZs2WaXuEsRD0jk4")
         await updateDoc(result,{
          img:e.target.src
         })
      }

  return(
    <FBcontext.Provider value={{ reqOtp, verifyOTP, phoneNumber, setPhoneNumber, OTP, expandForm, setExpandForm, user, number, plusData, bharatData, getDocsByQuery, actionData, bestInSportsData, channelsData, users, AuthUser, currentUser, storageRef, signInWithGoogle,signInWithFacebook, userEmail, showsDesc, showsImg, updateData, showsData, showsArr, moboUpdate, HomeSlider, allChannelsData, genresData, languagesData}}>
   {children}
    </FBcontext.Provider>
  )
}
