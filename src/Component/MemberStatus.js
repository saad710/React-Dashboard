import React from 'react';
import Avatar from "../images/avatar/02.png"

const MemberStatus = () => {
    return (
        <section class="member-status right">
        <div class="sidebar-member">
            <ul class="member-tab">
                <li>
                    <i class="fa fa-users" aria-hidden="true"></i>
                </li>
                <li>
                    <i class="fa fa-bell" aria-hidden="true"></i>
                </li>
            </ul>
            <div class="content-tab">
                <div class="scroll content">
                    <ul class="member-list online">
                        <li class="member-header">ONLINE</li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Robart Alex</p>
                                    <p class="options">Writer, Editor</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>		
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Anthony Gomes</p>
                                    <p class="options">Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Robarto Thuan</p>
                                    <p class="options">UX Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color pink heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Mogen Polshin</p>
                                    <p class="options">UI Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Mogen Pallak</p>
                                    <p class="options">Writer, Editor</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color blue style2 heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Shawon Rox</p>
                                    <p class="options">Writer, Editor</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Jonathan Doe</p>
                                    <p class="options">UX Engineer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color green heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Alex Morgan</p>
                                    <p class="options">Writer, Editor</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                    </ul>
                    <ul class="member-list offline">
                        <li class="member-header">OFFLINE</li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color grey heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Robart Alex</p>
                                    <p class="options">Writer, Editor</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color grey heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Anthony Gomes</p>
                                    <p class="options">Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color grey heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Robarto Thuan</p>
                                    <p class="options">UX Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                        <li>
                            <a href="#" title="">
                                <div class="avatar">
                                    <img src={Avatar} alt=""/>
                                    <div class="status-color grey heartbit"></div>
                                </div>
                                <div class="info-user">
                                    <p class="name">Mogen Polshin</p>
                                    <p class="options">UI Designer</p>
                                </div>
                                <div class="clearfix"></div>
                            </a>	
                        </li>
                    </ul>
                </div>
                <div class="content scroll">
                    <ul class="notify">
                        <li>
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                            </div>
                            <div class="notify-content">
                                Robart Alex has a news post.
                            </div>
                            <div class="clearfix"></div>
                        </li>
                        <li>
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                            </div>
                            <div class="notify-content">
                                Anthony Gomes has a news post.
                            </div>
                            <div class="clearfix"></div>
                        </li>
                        <li>
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                            </div>
                            <div class="notify-content">
                                Robarto Thuan has comment post <a href="#" title="">pages</a>.
                            </div>
                            <div class="clearfix"></div>
                        </li>
                        <li>
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                            </div>
                            <div class="notify-content">
                                Alex Morgan liked your new image.
                            </div>
                            <div class="clearfix"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MemberStatus;