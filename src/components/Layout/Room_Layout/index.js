import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TopNav from '../../TopNav/TopNav';
import RoomHeader from './RoomHeader';
import RoomManger from './RoomManager';

export default function RoomLayout() {
    return (
        <div className="nav-md">
            <div className="container body">
                <div className="main_container">
                    {/* Sidebar */}
                    <div className="col-md-3 left_col">
                        <Sidebar />
                    </div>

                    {/* Top Navigation */}
                    <div className="top_nav">
                        <TopNav />
                    </div>

                    {/* Main Content */}
                    <div className="right_col" role="main">
                        <div>
                            <RoomHeader></RoomHeader>
                        </div>
                        <div>
                            <RoomManger></RoomManger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
