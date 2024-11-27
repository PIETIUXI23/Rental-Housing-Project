import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Post() {
    const [value, setValue] = useState('');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Đăng bài</div>
            <div>
                <form>
                    <div className={cx('input-group')}>
                        {' '}
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Post;
