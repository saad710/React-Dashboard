import React from 'react';
import Avatar from "../images/avatar/message-01.png"
import inbox from "../images/icon/download.png"
import Bin from "../images/icon/bin.png"
import MessageOne from "../images/message/01.png"
import Pin from "../images/icon/pin.png"
import Camera from "../images/icon/camera.png"
import IconMessage from "../images/icon/icon-message.png"

const Message = () => {
    return (
        <main>
        <section >
        <div class="box box-message">
            <div class="box-header">
                <div class="header-title">
                    <img src={inbox} alt=""/>
                    <span>INBOX</span>
                </div>
            </div>
            <div class="box-content">
                <ul class="message-list scroll">
                    <li class="waves-effect waves-teal">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        Jonathan Alex
                                    </div>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                Today, 10:15 PM
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="waves-effect waves-teal">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        Ricky Martin
                                    </div>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                Today, 10:15 PM
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="waves-effect waves-teal">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        Stuard James
                                    </div>
                                    <span>2</span>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                June 15
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="waves-effect waves-teal active">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        John Alex
                                    </div>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                June 12
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="waves-effect waves-teal">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        Robart K
                                    </div>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                June 11
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="waves-effect waves-teal">
                        <div class="left">
                            <div class="avatar">
                                <img src={Avatar} alt=""/>
                                <div class="status-color blue style2 heartbit"></div>
                            </div>
                            <div class="content">
                                <div class="username">
                                    <div class="name">
                                        Robart K
                                    </div>
                                </div>
                                <div class="text">
                                    <p>Hi, please loock my last design</p>
                                    <p>I hope you like it.</p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="date">
                                June 11
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                </ul>
                <div class="new-message">
                    <a href="#" class="waves-effect" title="">Compose New</a>
                </div>
            </div>
        </div>
        <div class="message-info right">
            <div class="message-header">
                <div class="move-message">
                    <a href="#" title="">
                        <span><img src={Bin} alt=""/></span>
                        MOVE TO TRASH
                    </a>
                </div>
                <div class="box-info-messager">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="content">
                        <div class="username">
                            Ricky Martin
                        </div>
                        <div class="text">
                            <p>Hi, please loock my last design</p>
                            <p>I hope you like it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message-box scroll">
                <div class="message-in">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, John</p>
                            <p>You have excellent dashboard design, I wanted to offer to cooprate. I can promote your design.</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="message-out">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, Martin</p>
                            <p>You have excellent dashboard design, I wanted to offer to cooprate. I can promote your design. to offer to cooprate</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="message-in">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, John</p>
                            <p>You have excellent dashboard design, I wanted to offer to cooprate. I can promote your design.</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="message-out">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, Martin</p>
                            <p>Here is some of my best work example for ux & ui design works. Reply me with your openion about my work</p>
                        </div>
                        <div class="message-image">
                            <ul>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="message-in">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, John</p>
                            <p>You have excellent dashboard design, I wanted to offer to cooprate. I can promote your design.</p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
                <div class="message-out">
                    <div class="message-pic">
                        <img src={Avatar} alt=""/>
                        <div class="status-color purple"></div>
                    </div>
                    <div class="message-body">
                        <div class="message-text">
                            <p>Hi, Martin</p>
                            <p>Here is some of my best work example for ux & ui design works. Reply me with your openion about my work</p>
                        </div>
                        <div class="message-image">
                            <ul>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                                <li>
                                    <img src={MessageOne} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="form-chat">
                <form action="#" method="get" accept-charset="utf-8">
                    <div class="message-form-chat">
                        <span class="pin">
                            <a href="#" title="">
                                <img src={Pin} alt=""/>
                            </a>
                        </span>
                        <span class="message-text">
                            <textarea name="message" placeholder="Type your message..." required="required"></textarea>
                        </span>
                        <span class="camera">
                            <a href="#" title="">
                                <img src={Camera} alt=""/>
                            </a>
                        </span>
                        <span class="icon-message">
                            <a href="#" title="">
                                <img src={IconMessage} alt=""/>
                            </a>
                        </span>
                        <span class="btn-send">
                            <button class="waves-effect" type="submit">Send</button>
                        </span>
                        <div class="icon-mobile">
                            <ul>
                                <li>
                                    <a href="#" title=""><img src={Pin} alt=""/></a>
                                </li>
                                <li>
                                    <a href="#" title=""><img src={Camera} alt=""/></a>
                                </li>
                                <li>
                                    <a href="#" title=""><img src={IconMessage} alt=""/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </form>
            </div>
        </div>
        <div class="clearfix"></div>
    </section>
    </main>
    );
};

export default Message;