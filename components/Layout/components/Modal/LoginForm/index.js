import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '..';
import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import { faClose, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';

const cx = classNames.bind(styles);

function LoginForm({ visible, onClick, onRedirect }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handelLogin = (e) => {
        e.preventDefault();
        console.log(userName + ' ' + password);
    };

    return (
        <Modal visible={visible} onClick={onClick}>
            <div
                className={cx('login-form')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <form>
                    <div>
                        <button onClick={onClick}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                    <div>Xin chào bạn</div>
                    <div>Đăng nhập để tiếp tục</div>
                    <div className={cx('input-group')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <input
                            className={cx('username')}
                            placeholder="Tên đăng nhập"
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            value={userName}
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                            className={cx('password')}
                            placeholder="Mật khẩu"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type={isShowPassword ? 'text' : 'password'}
                            value={password}
                        />
                        <div className={cx('show-password')}>
                            <FontAwesomeIcon
                                className={cx('btn-show', { action: isShowPassword })}
                                icon={faEye}
                                onMouseUp={() => {
                                    setIsShowPassword(!isShowPassword);
                                }}
                            />
                        </div>
                        <div className={cx('show-password')}>
                            <FontAwesomeIcon
                                className={cx('btn-show', { action: !isShowPassword })}
                                icon={faEyeSlash}
                                onMouseDown={() => {
                                    setIsShowPassword(!isShowPassword);
                                }}
                            />
                        </div>
                    </div>
                    <div className={cx('input-group')}>
                        <button onClick={handelLogin}>Đăng nhập</button>
                    </div>
                </form>
                <div className={cx('forgot-password')}>
                    <Link className={cx('redirect')}>Quên mật khẩu?</Link>
                </div>
                <div className={cx('redirect')}>
                    Chưa có tài khoản? <span onClick={onRedirect}>Đăng ký tại đây</span>
                </div>
            </div>
        </Modal>
    );
}

export default LoginForm;