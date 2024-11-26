import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '..';
import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';
import { faEnvelope, faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons';
import { faClose, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function RegisterForm({ visible, onClick, onRedirect }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isContinueRegister, setIsContinueRegister] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(userName + ' ' + password);
    };

    const handleContinue = () => {
        setIsContinueRegister(true);
    };
    return isContinueRegister ? (
        <Modal visible={visible} onClick={onClick}>
            <div
                className={cx('register-form')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div>Mời bạn chọn gói</div>
            </div>
        </Modal>
    ) : (
        <Modal visible={visible} onClick={onClick}>
            <div
                className={cx('register-form')}
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
                    <div>Đăng ký tài khoản mới</div>
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
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <input
                            className={cx('re-password')}
                            placeholder="Nhập lại mật khẩu"
                            onChange={(e) => {
                                setRePassword(e.target.value);
                            }}
                            type={isShowPassword ? 'text' : 'password'}
                            value={rePassword}
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
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <input
                            className={cx('email')}
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <div className={cx('icon')}>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <input
                            className={cx('phone-number')}
                            placeholder="Số điện thoại"
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }}
                            value={phoneNumber}
                        />
                    </div>
                    <div className={cx('input-group')}>
                        <button onClick={handleContinue}>Tiếp tục</button>
                    </div>
                </form>
                <div className={cx('redirect')}>
                    Đã có tài khoản? <span onClick={onRedirect}>Đăng nhập tại đây</span>
                </div>
            </div>
        </Modal>
    );
}

export default RegisterForm;
