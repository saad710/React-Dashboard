import React from 'react';
import AvatarDashboard from "../images/avatar/avatar-dashboard.png"
import Monitor from "../images/icon/monitor.png"
import Message from "../images/icon/message.png"
import Calendar from "../images/icon/calendar.png"
import Pages from "../images/icon/pages.png"
import Apps from "../images/icon/apps.png"
import Setting from "../images/icon/setting-02.png"
import { Link } from 'react-router-dom';

const Leftmenu = () => {
    return (
        <section class="vertical-navigation left">
        <div class="user-profile">
            <div class="user-img">
                <a href="#" title="">
                    <div class="img">
                        <img src={AvatarDashboard} alt=""/>
                    </div>
                    <div class="status-color blue heartbit style1"></div>
                </a>
            </div>
            <ul class="user-options">
                <li class="name"><a href="#" title="">STUARD ALEX</a></li>
                <li class="options">ADMINISTRATOR</li>
            </ul>
        </div>
        <ul class="sidebar-nav">
            <li class="dashboard waves-effect waves-teal active">
               <Link to='/home'>
               <div class="img-nav">
                    <img src={Monitor} alt=""/>
                </div>
                <span>DASHBOARD</span>
               </Link>
            </li>
            <li class="message waves-effect waves-teal">
               
               <div class="img-nav">
               <Link to="chat">
                    <img src={Message} alt=""/>
                    </Link>
                    <span>3</span>
                </div>
                <span>MESSAGE</span>
             
            </li>
            <li class="calendar waves-effect waves-teal">
                <div class="img-nav">
                  <Link to="/event">
                  <img src={Calendar} alt=""/>
                  </Link>
                </div>
                <span>CALENDAR</span>
            </li>
            <li class="pages waves-effect waves-teal">
                <div class="img-nav">
                    <img src={Pages} alt=""/>
                </div>
                <span>PAGES</span>
            </li>
            <li class="apps waves-effect waves-teal">
                <div class="img-nav">
                    <img src={Apps} alt=""/>
                </div>
                <span>APPS</span>
            </li>
            <li class="setting waves-effect waves-teal">
                <div class="img-nav">
                    <img src={Setting} alt=""/>
                </div>
                <span>SETTING</span>
            </li>
        </ul>
    </section>

    );
};

export default Leftmenu;