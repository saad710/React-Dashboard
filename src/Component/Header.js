import React from 'react';
import Logo from "../images/logo.png"
import Search from "../images/icon/search.png"
import Setting from "../images/icon/setting.png"
import Avatar from "../images/avatar/01.png"
import Menu from "../images/icon/menu-right.png"


const Header = () => {
    return (
        <header id="header" class="header fixed">
			<div class="navbar-top">
				<div class="curren-menu info-left">
					<div class="logo">
						<a href="index.html" title="">
							<img src={Logo} alt="One Admin"/>
						</a>
					</div>
					<div class="top-button">
						<span></span>
					</div>
					<div class="box-search">
						<form action="#" method="get" accept-charset="utf-8">
							<button><img src={Search} alt=""/></button>
							<input type="text" placeholder="Search Projects..." name="Search"/>
						</form>
					</div>
				</div>
				<ul class="info-right">
					<li class="setting">
						<a href="#" class="waves-effect waves-teal" title="">
							<img src={Setting} alt=""/>
						</a>
					</li>
					<li class="notification">
						<a href="#" class="waves-effect waves-teal" title="">
							7
						</a>
					</li>
					<li class="user">
						<div class="avatar">
							<img src={Avatar} alt=""/>
						</div>
						<div class="info">
							<p class="name">STUARD ALEX</p>
							<p class="address">San Fransico, CA</p>
						</div>
						<div class="arrow-down">
							<i class="fa fa-angle-down" aria-hidden="true"></i>
							<i class="fa fa-angle-up" aria-hidden="true"></i>
						</div>
						<div class="dropdown-menu">
							<ul>
								<li>
									<div class="avatar">
										<img src={Avatar} alt=""/>
									</div>
									<div class="profile">
										<a href="#" title="">View Profile</a>
									</div>
									<div class="clearfix"></div>
								</li>
								<li>
									<a href="#" class="waves-effect" title="">My Account</a>
								</li>
								<li>
									<a href="#" class="waves-effect" title="">Setting</a>
								</li>
								<li>
									<a href="#" class="waves-effect" title="">Logout</a>
								</li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</li>
					<li class="button-menu-right">
						<img src={Menu} alt=""/>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
		</header>

    );
};

export default Header;