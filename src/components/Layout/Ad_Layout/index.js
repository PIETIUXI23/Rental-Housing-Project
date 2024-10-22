import React from "react";
import "./Ad.css"; // File CSS cho bố cục

function AdLayout() {
    return (
        <div className="container">
            <header className="header">Header 1512.8 x 96</header>

            <div className="remain">
                {/* Thêm div bao ngoài */}
                <div className="main-container"> main_container 936 x 6734.89
                    <div className="form">form 936 x 113.6</div>

                    <div className="content-wrapper">
                        <div className="main-content">div.re_main-content 696 x 6593.29</div>
                        <div className="sidebar">div.re_sidebar 210 x 343.6</div>
                    </div>
                </div>
            </div>

            <footer className="footer">footer 1512 x 745.4</footer>
        </div>
    );
}

export default AdLayout;
