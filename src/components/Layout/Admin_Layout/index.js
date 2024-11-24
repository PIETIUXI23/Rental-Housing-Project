import React from 'react';
import Sidebar from '../../Sidebar/Sidebar.js';
import TopNav from '../../TopNav/TopNav.js';
import WaitingModal from '../../Modal/WaitingModal.js';
import NoteModal from '../../Modal/NoteModal.js';
import CalculatorModal from '../../Modal/CalculatorModal.js';

const AdminLayout = ({ children }) => {
    return (
        <body className="nav-md">
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
                    <div className="right_col" role="main" style={{ minHeight: '361px' }}>
                        {children}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <WaitingModal />
            <NoteModal />
            <CalculatorModal />
        </body>
    );
};

export default AdminLayout;
