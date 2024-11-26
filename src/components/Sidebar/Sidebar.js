import React, { useState } from 'react';
import { MENU_ITEMS, FOOTER_ITEMS } from '../../data/menuItems';

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({});

    // Hàm mở hoặc đóng menu con
    const toggleSubMenu = (id) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <div className="left_col scroll-view">
            {/* Logo */}
            <div className="navbar nav_title" style={{ border: '0' }}>
                <a href="../" className="site_title">
                    QUẢN LÝ NHÀ TRỌ
                </a>
            </div>

            {/* Tiêu đề */}
            <div className="clearfix" style={{ textAlign: 'center', color: '#73879c' }}>
                SIMPLE HOUSE
            </div>

            {/* Thông tin người dùng */}
            <div className="profile clearfix">
                <div className="profile_pic"></div>
                <div className="profile_info">
                    <span>
                        Xin Chào, <span>Phúc Văn Danh</span>
                    </span>
                </div>
            </div>

            {/* Menu */}
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <ul className="nav side-menu">
                        {MENU_ITEMS.map((item) => {
                            const isOpen = openMenus[item.id] || false;

                            if (item.label === 'Báo cáo') {
                                return (
                                    <li key={item.id} className={isOpen ? 'active' : ''}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleSubMenu(item.id);
                                            }}
                                        >
                                            <i className={`fa ${item.icon}`}></i> {item.label}
                                            <span className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></span>
                                        </a>
                                        {item.subMenu && (
                                            <ul className="nav child_menu" style={{ display: isOpen ? 'block' : 'none' }}>
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
                                );
                            }

                            return (
                                <li key={item.id}>
                                    <a href={item.path}>
                                        <i className={`fa ${item.icon}`}></i> {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="sidebar-footer hidden-small">
                {FOOTER_ITEMS.map((item) => (
                    <a key={item.id} href={item.path} title={item.label}>
                        <i className={`fa ${item.icon}`}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
