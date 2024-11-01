import React from 'react';
import styles from './Ad.module.scss'; // File CSS cho bố cục
import classNames from 'classnames/bind';
import UserHeader from '../components/UserHeader';

const cx = classNames.bind(styles);

function AdLayout() {
    return (
        <div className={cx('container')}>
            <UserHeader />

            <div className={cx('remain')}>
                {/* Thêm div bao ngoài */}
                <div className={cx('main-container')}>
                    {' '}
                    main_container 936 x 6734.89
                    <div className={cx('form')}>form 936 x 113.6</div>
                    <div className={cx('content-wrapper')}>
                        <div className={cx('main-content')}>div.re_main-content 696 x 6593.29</div>
                        <div className={cx('sidebar')}>div.re_sidebar 210 x 343.6</div>
                    </div>
                </div>
            </div>

            <footer className={cx('footer')}>footer 1512 x 745.4</footer>
        </div>
    );
}

export default AdLayout;
