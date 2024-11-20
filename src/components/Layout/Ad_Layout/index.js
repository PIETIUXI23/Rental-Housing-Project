import React from 'react';
import styles from './Ad.module.scss'; // File CSS cho bố cục
import classNames from 'classnames/bind';
import UserHeader from '../components/UserHeader';
import LoginForm from '../components/Modal/LoginForm';
import RegisterForm from '../components/Modal/RegisterForm';

const cx = classNames.bind(styles);

function AdLayout({ children }) {
    return (
        <div className={cx('container')}>
            <UserHeader />

            <div className={cx('remain')}>
                {/* Thêm div bao ngoài */}
                <div className={cx('main-container')}>{children}</div>
            </div>

            <footer className={cx('footer')}>footer 1512 x 745.4</footer>
        </div>
    );
}

export default AdLayout;
