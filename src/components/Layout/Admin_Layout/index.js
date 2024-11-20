import React, { useState } from "react";
import styles from "./Admin.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../../Admin_Sidebar/Admin_Sidebar";
import AdminNavMenu from "../../Admin_navmenu/AdminNavMenu";
const cx = classNames.bind(styles);

function AdminLayout() {
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleReport = () => {
        setIsReportOpen(!isReportOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
        console.log("Sidebar isCollapsed:", !isSidebarCollapsed); // Log trạng thái mới
    };


    return (
        <div className={cx("admin-container")}>
            {/* Sidebar */}
            <Sidebar
                toggleReport={toggleReport}
                isReportOpen={isReportOpen}
                isCollapsed={isSidebarCollapsed} // Trạng thái thu nhỏ
            />

            {/* Content */}
            <div className={cx("right_col")}>
                <div className={cx("nav_menu")}>
                    <AdminNavMenu onToggleMenu={toggleSidebar} />
                </div>
                <div className={cx("content_panel")}>
                    {/* Nội dung khác */}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
