import React from 'react';
import InboxOne from "../images/avatar/inbox-01.png"
import InboxTwo from "../images/avatar/inbox-02.png"
import InboxThree from "../images/avatar/inbox-03.png"
import InboxFour from "../images/avatar/inbox-04.png"

const ProjectRow = () => {
    return (
        <div class="rows">
        <div class="box box-project left">
            <div class="box-header with-border">
                <div class="box-title">
                    <h3>PROJECT STATUS</h3>
                    <span>56</span>
                </div>
                  <div class="box-tools pull-right ">
                      <i class="zmdi zmdi-more-vert waves-effect waves-teal"></i>
                      <ul class="dropdown-menu">
                          <li>
                              <a href="#" class="waves-effect" title="">Action</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">Support</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">FAQ</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">Message</a>
                          </li>
                      </ul>
                  </div>
                  <div class="clearfix"></div>
            </div>
            <div class="box-content">
                <table class="">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PROJECT</th>
                            <th>STATUS</th>
                            <th>PROGRESS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="developing">
                            <td>1024</td>
                            <td>User Research</td>
                            <td class="bg"><span data-percent="60" data-waypoint-active="yes">Developing</span></td>
                            <td>Ongoing</td>
                        </tr>
                        <tr class="design">
                            <td>ID</td>
                            <td>Wings Dashboard Design</td>
                            <td class="bg"><span data-percent="60" data-waypoint-active="yes">Design</span></td>
                            <td>Completed</td>
                        </tr>
                        <tr class="cancel">
                            <td>ID</td>
                            <td>iOS Apps for DXSource</td>
                            <td class="bg"><span data-percent="160" data-waypoint-active="yes">Canceled</span></td>
                            <td>Cenceled</td>
                        </tr>
                        <tr class="testing">
                            <td>ID</td>
                            <td>BMW Re-Design</td>
                            <td class="bg"><span data-percent="60" data-waypoint-active="yes">Testing</span></td>
                            <td>PROGRESS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="box box-inbox right">
            <div class="box-header with-border">
                <div class="box-title">
                    <h3>INBOX</h3>
                    <span>47</span>
                </div>
                  <div class="box-tools pull-right">
                      <i class="zmdi zmdi-more-vert waves-effect waves-teal"></i>
                      <ul class="dropdown-menu">
                          <li>
                              <a href="#" class="waves-effect" title="">Action</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">Support</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">FAQ</a>
                          </li>
                          <li>
                              <a href="#" class="waves-effect" title="">Message</a>
                          </li>
                      </ul>
                  </div>
                  <div class="clearfix"></div>
            </div>
            <div class="box-content">
                <ul class="inbox-list">
                    <li class="waves-effect">
                        <a href="#" title="">
                            <div class="left">
                                <img src={InboxOne} alt=""/>
                                <div class="info">
                                    <p class="name">John Alex</p>
                                    <p>Hey! How are you?</p>
                                </div>
                            </div>
                            <div class="right">
                                12:20 PM
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>	
                    <li class="waves-effect">
                        <a href="#" title="">
                            <div class="left">
                                <img src={InboxTwo} alt=""/>
                                <div class="info">
                                    <p class="name">John Alex</p>
                                    <p>Hey! How are you?</p>
                                </div>
                            </div>
                            <div class="right">
                                12:20 PM
                            </div>
                            <div class="clearfix"></div>
                        </a>
                    </li>	
                    <li class="waves-effect">
                        <a href="#" title="">
                            <div class="left">
                                <img src={InboxThree} alt=""/>
                                <div class="info">
                                    <p class="name">John Alex</p>
                                    <p>Hey! How are you?</p>
                                </div>
                            </div>
                            <div class="right">
                                12:20 PM
                            </div>
                            <div class="clearfix"></div>
                        </a>	
                    </li>
                    <li class="waves-effect">
                        <a href="#" title="">
                            <div class="left">
                                <img src={InboxFour} alt=""/>
                                <div class="info">
                                    <p class="name">John Alex</p>
                                    <p>Hey! How are you?</p>
                                </div>
                            </div>
                            <div class="right">
                                12:20 PM
                            </div>
                            <div class="clearfix"></div>
                        </a>	
                    </li>
                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    );
};

export default ProjectRow;