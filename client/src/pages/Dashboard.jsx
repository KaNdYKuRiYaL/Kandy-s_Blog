import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComponent from '../components/DashboardComponent';

export default function Dashboard() {
  const location  = useLocation();
  const  [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search])
  return (
    <div  className='min-h-screen  flex  flex-col md:flex-row '>
      {/* side bar */}
      <div className='md:w-56'>
        <DashSidebar/>
      </div>

      {/* prfile ,exr */}
      {tab === 'profile' && <DashProfile/>}

      {/* for post */}
      {tab === 'posts' && <DashPosts/>}

      {/* for users */}
      {tab === 'users' && <DashUsers/>}

      {/* for comments */}
      {tab === 'comments' && <DashComments/>}

      {/* dashboard */}
      {tab === 'dash' && <DashboardComponent/> }

    </div>
  )
}
