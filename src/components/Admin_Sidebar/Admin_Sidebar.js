import React from "react";
import styles from "./Admin_Sidebar.module.scss";
import classNames from "classnames/bind";
import { MENU_ITEMS, FOOTER_ITEMS } from "./config";

const cx = classNames.bind(styles);

const Sidebar = ({ isCollapsed, toggleReport, isReportOpen }) => {
    return (
        <div className={cx("left_col", { collapsed: isCollapsed })}>
            {/* Header Section */}
            <div className={cx("navbar", "nav_title")} style={{ border: 0 }}>
                <a href="../admin" className={cx("site_title")}>
                    QUẢN LÝ NHÀ TRỌ
                </a>
            </div>

            <div className={cx("clearfix")} style={{ textAlign: "center" }}>
                SIMPLE HOUSE
            </div>

            {/* Profile Section */}
            <div className={cx("profile", "clearfix")}>
                <div className={cx("profile_pic")}></div>
                <div className={cx("profile_info")}>
                    <span>Xin Chào,</span>
                    <text> Phúc Văn Danh</text>
                </div>
            </div>

            <br />

            {/* Sidebar Menu */}
            <div id="sidebar-menu" className={cx("main_menu_side", "hidden-print", "main_menu")}>
                <div className={cx("menu_section")}>
                    <ul className={cx("nav", "side-menu")} id="menu_slider">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.id}>
                                {item.hasSubmenu ? (
                                    <>
                                        <a onClick={toggleReport}>
                                            <i className={`fa ${item.icon}`}></i>
                                            {item.label}{" "}
                                            <span className="fa fa-chevron-down"></span>
                                        </a>
                                        {isReportOpen && (
                                            <ul className={cx("nav", "child_menu")}>
                                                {item.subMenu.map((subItem) => (
                                                    <li key={subItem.id}>
                                                        <a href={subItem.path}>
                                                            <i className={`fa ${subItem.icon}`}></i> {subItem.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a href={item.path}>
                                        <i className={`fa ${item.icon}`}></i> {item.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Section */}
            <div className={cx("sidebar-footer")}>
                {FOOTER_ITEMS.map((item) => (
                    <a
                        key={item.id}
                        data-toggle="tooltip"
                        data-placement="top"
                        title={item.label}
                        href={item.path}
                    >
                        <i className={`fa ${item.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
