import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './UserHeader.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import Wrapper from '~/components/Popper/Wrapper';
import StoredItem from '~/components/StoredItem';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LoginForm from '../Modal/LoginForm';
import RegisterForm from '../Modal/RegisterForm';

const cx = classNames.bind(styles);

function UserHeader() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [storedList, setStoredList] = useState([]);
    const [isLoginFormVisble, setIsLoginFormVisble] = useState(false);
    const [isRegisterFormVisble, setIsRegisterFormVisble] = useState(false);

    const handleToggleDropdown = () => {
        const storedList = JSON.parse(localStorage.getItem('favoritedItems'));
        if (storedList) {
            setStoredList(storedList.reverse().slice(0, 3));
        }
        setIsDropdownOpen((prev) => !prev);
    };

    const handleCloseDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleLoginForm = () => {
        setIsLoginFormVisble(!isLoginFormVisble);
    };
    const toggleRegisterForm = () => {
        setIsRegisterFormVisble(!isRegisterFormVisble);
    };

    const closeLoginForm = () => {
        setIsLoginFormVisble(false);
    };
    const closeRegisterForm = () => {
        setIsRegisterFormVisble(false);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} />
                </div>
                <div className={cx('actions')}>
                    <Tippy
                        zIndex={1000}
                        offset={[0, 0]}
                        interactive={true}
                        visible={isDropdownOpen === true}
                        onClickOutside={handleCloseDropdown}
                        render={(attrs) => {
                            return (
                                <div className={cx('stored-list')} tabIndex="-1" {...attrs}>
                                    <Wrapper className={cx('stored-popper')}>
                                        <div className={cx('popper-header')}>Tin đăng đã lưu</div>
                                        <div className={cx('popper-body')}>
                                            {storedList == null || storedList.length == 0 ? (
                                                <img src={images.empty_state_img} />
                                            ) : (
                                                <>
                                                    {storedList.map((storedItem) => {
                                                        return <StoredItem data={storedItem} />;
                                                    })}
                                                    <Link className={cx('all-stored-btn')} to="/stored">
                                                        Xem tất cả <FontAwesomeIcon icon={faArrowRight} />
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </Wrapper>
                                </div>
                            );
                        }}
                    >
                        <button className={cx('store_btn')} onClick={handleToggleDropdown}>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </Tippy>
                    <Button onClick={toggleLoginForm}>Đăng nhập</Button>
                    <span className={cx('btn_line')}></span>
                    <Button onClick={toggleRegisterForm}>Đăng ký</Button>
                    <Button className={cx('last_btn')} outline>
                        Đăng tin
                    </Button>
                </div>
            </div>
            <LoginForm visible={isLoginFormVisble} onClick={closeLoginForm} />
            <RegisterForm visible={isRegisterFormVisble} onClick={closeRegisterForm} />
        </header>
    );
}

export default UserHeader;
