import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoClip from '../Pages/VideoClip'
import Category from "../Pages/Category";
import Faq from "../Pages/Faq";
import InfoPage from "../Pages/InfoPage";
import InternalUser from "../Pages/InternalUser";
import PushNotification from "../Pages/PushNotification";
import ReportedContent from "../Pages/ReportedContent";
import WowUsers from "../Pages/WowUsers";
import Dashboard from '../Pages/Dashboard';

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/wow' element={<WowUsers/>}/>
            <Route path='/video_clip' element={<VideoClip/>}/>
            <Route path='/reported_content' element={<ReportedContent/>}/>
            <Route path='/category' element={<Category/>}/>
            <Route path='/page-info' element={<InfoPage/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/push_notification' element={<PushNotification/>}/>
            <Route path='/internal_user' element={<InternalUser/>}/>
        </Routes>

    </div>
  )
}

export default MainRoutes







