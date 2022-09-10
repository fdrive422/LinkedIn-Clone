import React from "react";
import './Sidebar.css';
import { Avatar } from "@mui/material";

function Sidebar() {
	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	)

	return (<div className='sidebar'>
		<div className='sidebar__top'>
			<img
				src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
				alt="" />
			<Avatar className='sidebar__avatar' />
			<h2>Francis Frago</h2>
			<h4>fafrago@gmail.com</h4>
		</div>

		<div className='sidebar__stats'>
			<div className='sidebar__stat'>
				<p>Who viewed you</p>
				<p className='sidebar__statNumber'>1,231</p>
			</div>
			<div className='sidebar__stat'>
				<p>Views on post</p>
				<p className='sidebar__statNumber'>2,231</p>
			</div>
		</div>

		<div className='sidebar__bottom'>
			<p>Recent</p>
			{recentItem('reactjs')}
			{recentItem('programming')}
			{recentItem('softwareengineering')}
			{recentItem('desgin')}
			{recentItem('developer')}
		</div>
	</div>
	);
}

export default Sidebar;
