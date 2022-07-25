import React, { useState } from 'react';
import { RiListCheck2, RiTaskLine, RiFileUserLine } from "react-icons/ri";
import {GiChocolateBar} from 'react-icons/gi'
import {HiOutlineLogout} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'
import {BsCalendarCheckFill} from 'react-icons/bs'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {GiArtificialIntelligence} from 'react-icons/gi'
import '../styles/Components.css'
import { Link } from 'react-router-dom'
import gLogo from '../static/greenLogo.png'
function SideBar({active}) {
    const admin = localStorage.getItem('admin')

    if(admin=='true'){
        var links = [
            {
                name: 'DASHBOARD',
                link: '/',
                icon: <RiListCheck2/>,
            },
            {
                name: 'TASKS',
                link: '/tasks',
                icon: <RiTaskLine/>,
            },
            {
                name: 'STOCK',
                link: '/stock',
                icon: <GiChocolateBar/>,
            },
            {
                name: 'Lidar Mapping',
                link: '/employee',
                icon: <TiLocation/>,
            },
        ]
    }
    else{
        var links = [
            {
                name: 'DASHBOARD',
                link: '/',
                icon: <RiListCheck2/>,
            },
            {
                name: 'Lidar Mapping',
                link: '/maps',
                icon: <TiLocation/>,
            },
            {
                name: 'Live Feed',
                link: '/camera',
                icon: <BsFillCameraVideoFill/>,
            },
            {
                name: 'Calendar',
                link: '/calendar',
                icon: <BsCalendarCheckFill/>,
            },
            {
                name: 'Disease Detector',
                link: '/detect',
                icon: <GiArtificialIntelligence/>,
            }
        ]
    }

    const logout = () => {
        localStorage.removeItem('session')
        localStorage.removeItem('admin')
        window.location = '/login'
    }

    return (
        <div className='sidebar'>
            <Link to={"/"}><img src={gLogo} className="gl"></img></Link>

            <ul>
                {links.map((item,key) =>
                <Link to={item.link} key={key}><li className={active === item.name.toLowerCase() ? 'active': ''}>{item.icon} <span>{item.name}</span></li></Link>
                )}

                <li style={{cursor: 'pointer'}} onClick={logout}><HiOutlineLogout/> <span>LOGOUT</span></li>
                
            </ul>
        </div>
    )
}

export default SideBar;
