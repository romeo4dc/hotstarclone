import React, { useEffect, useState } from 'react';
import './index.css';
import Home from './components/Home';
import Tv from './CateogoryFolders/Tv';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate
} from "react-router-dom";
import Category from './components/Category';
import Movies from './CateogoryFolders/Movies';
import Sports from './CateogoryFolders/Sports';
import Subscribe from './components/Subscribe';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import MySpace from './components/MySpace';
import Search from './CateogoryFolders/Search';
import VlatestTrending from './ViewAll/VlatestTrending';
import MainMovies from './components/MainMovies';
import MainSports from './components/MainSports'
import LoggedIn from './components/LoggedIn';
import EditProfile from './components/EditProfile';
import ConfirmProfile from './components/ConfirmProfile';
import Logout from './components/Logout';
import { useFirebase } from './firebase/firebase';
import MoboLogin from './MoboComp/MoboLogin';
import MoboLogout from './MoboComp/MoboLogout';
import MoboChannels from './MoboComp/MoboChannels';
import Shows from './components/Shows';
import MoboShows from './MoboComp/MoboShows';
import Disney from './CateogoryFolders/Disney';
import SpaceLogin from './components/SpaceLogin';
import MoboLanguages from './MoboComp/MoboLanguages';
import MoboGenres from './MoboComp/MoboGenres';
const App = () => {
  const firebase = useFirebase();
  const { currentUser } = firebase;

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Sidebar/><Home/><Category/></>
    },
    {
      path:"/tv",
      element:<><Sidebar/><Home/><Tv/></>
    },
    {
      path:"/movies",
      element:<><Sidebar/><Home/><Movies/></>
    },
    {
      path:"/sports",
      element:<><Sidebar/><Home/><Sports/></>
    },
    {
      path:"/disney",
      element:<><Sidebar/><Home/><Disney/></>
    },
    {
      path:"/subscribe",
      element:<Subscribe/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/myspace",
      element:<SpaceLogin/>
    },
    {
      path:"/search",
      element:<><Sidebar/><Search/></>
    },
    {
      path:"/viewall-l&t",
      element:<VlatestTrending/>
    },
    {
      path:"/edit",
      element:<EditProfile/>
    },
    {
      path:"/epro",
      element:<ConfirmProfile/>
    },
    {
      path:"/logout",
      element:currentUser ? <Logout/> : <><Sidebar/><Home/><Category/></>
    },
    {
      path:"/mobologin",
      element:<MoboLogin/>
    },
    {
      path:"/mobologout",
      element: <MoboLogout/> 
    },
    {
      path:"/mobochannels",
      element:<MoboChannels/>
    },
    {
      path:"/mobolanguages",
      element: <MoboLanguages/>
    },  
    {
      path:"/shows/view/:imdbID",
      element:<Shows/>
    },
    {
      path:"/mobotv",
      element:<><Tv/></>
    },
    {
      path:"/mshows/view/:imdbID",
      element:<MoboShows/>
    },
    {
      path:"/mobogenres",
      element:<MoboGenres/>
    },
    {
      path:"*",
      element: <><Sidebar/><Home/><Category/></>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
</>
  )
}

export default App;
