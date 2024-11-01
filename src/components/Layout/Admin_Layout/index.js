import React from "react";
import styles from "./Admin.module.scss"; // File CSS để định nghĩa các lớp
import classNames from "classnames/bind";

const cx=classNames.bind(styles);

function AdminLayout() {
    return (
        <div className={cx("admin-container")}>
            <div className={cx("left_col")}>
                div.left_col 230 x 1136.050
            </div>

            <div className={cx("right_col")}>
                <div className={cx("nav_menu")}>
                    div.nav_menu 1282.8 x 55.4
                </div>

                <div className={cx("x_panel")}>
                    div.x_panel
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
