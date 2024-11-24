import React from "react";
import { MENU_ITEMS, FOOTER_ITEMS } from "../../data/menuItems";


function Sidebar() {
    return (
        <div className={`left_col scroll-view`}>
            <div className={`navbar nav_title`} style={{ border: "0" }}>
                <a href="../" className="site_title">QUẢN LÝ NHÀ TRỌ</a>
            </div>

            <div className="clearfix" style={{ textAlign: "center" }}>SIMPLE HOUSE</div>

            <div className="profile clearfix">
                <div className="profile_pic"></div>
                <div className="profile_info">
                    <span>
                        Xin Chào,
                        <text>Phúc Văn Danh</text>
                    </span>
                </div>
            </div>

            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <ul className="nav side-menu" id="menu_slider">
                        {MENU_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a href={item.path}>
                                    <i className={`fa ${item.icon}`}></i> {item.label}
                                </a>
                                {item.subMenu && (
                                    <ul className="nav child_menu" style={{ display: "none" }}>
                                        {item.subMenu.map((child) => (
                                            <li key={child.id}>
                                                <a href={child.path}>
                                                    <i className={`fa ${child.icon}`}></i> {child.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="sidebar-footer hidden-small">
                {FOOTER_ITEMS.map((item) => (
                    <a key={item.id} href={item.path} title={item.label}>
                        <i className={`fa ${item.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
