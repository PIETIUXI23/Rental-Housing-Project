import classNames from 'classnames/bind';
import styles from './UserHeader.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function UserHeader() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
                <div className={cx('actions')}>
                    <Button>Đăng nhập</Button>
                    <Button>Đăng ký</Button>
                    <Button>Đăng tin</Button>
                </div>
            </div>
        </header>
    );
}

export default UserHeader;
