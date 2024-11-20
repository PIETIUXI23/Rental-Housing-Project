import Modal from '..';
import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function RegisterForm({ visible, onClick }) {
    return (
        <Modal visible={visible} onClick={onClick}>
            <div
                className={cx('register-form')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                Form đăng ký
            </div>
        </Modal>
    );
}

export default RegisterForm;
