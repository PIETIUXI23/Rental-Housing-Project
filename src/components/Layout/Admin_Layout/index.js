import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TopNav from "../../TopNav/TopNav";
import WaitingModal from "../../Modal/WaitingModal";
import NoteModal from "../../Modal/NoteModal";
import CalculatorModal from "../../Modal/CalculatorModal";

// Import các stylesheet
import "src/Extension/bootstrap/dist/css/bootstrap.min.css";
import "src/Extension/font-awesome/css/font-awesome.min.css";
import "src/Extension/nprogress/nprogress.css";
import "src/Extension/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css";
import "src/Extension/bootstrap-daterangepicker/daterangepicker.css";
import "src/Extension/toastr-master/toastr.min.css";
import "../../../Content/Custom.min.css";

const AdminLayout = ({ children }) => {
    return (
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
                <div className="right_col" role="main" style={{ minHeight: "361px" }}>
                    {children}
                </div>
            </div>
            {/* Modals */}
            <WaitingModal />
            <NoteModal />
            <CalculatorModal />
        </div>
    );
};

export default AdminLayout;
