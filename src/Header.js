import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://www.renlearn.co.uk/wp-content/uploads/2020/04/LinkedIn-Logo.png"
					alt="" />

				<div className="header__search">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>

			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notifications' />
				<HeaderOption avatar="../public/profilepic.jpg" title='me' /> {/* https://links.papareact.com/gll */}


			</div>
		</div>

	)
}

export default Header;
