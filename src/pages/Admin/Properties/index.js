import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Properties.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);

const Properties = () => {
    // const [keycards, setKeycards] = useState([
    //     {
    //         id: 1,
    //         name: 'KC001',
    //         address: 'Nguyễn Văn A',
    //         total_rooms: '101',
    //         status: 'Hoạt động',
    //     },
    //     {
    //         id: 2,
    //         name: 'KC001',
    //         address: 'Nguyễn Văn A',
    //         total_rooms: '101',
    //         status: 'Hoạt động',
    //     },
    //     {
    //         id: 3,
    //         name: 'KC001',
    //         address: 'Nguyễn Văn A',
    //         total_rooms: '101',
    //         status: 'Tạm khóa',
    //     },
    // ]);

    const [keycards, setKeycards] = useState([]);
    const [url] = useState(process.env.REACT_APP_API_HOUSES);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${url}`)
            .then((response) => {
                console.log('API Response:', response.data);
                setKeycards(response.data || []); // fallback nếu response trống
            })
            .catch((err) => {
                console.log(`${url}`);
                console.error('API Error:', err.response || err.message);
                setError(err.response?.data?.message || err.message);
            });
    }, []);

    if (error) {
        return <div>Lỗi: {error}</div>;
    }

    return (
        <div className={cx('properties-container')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>
                    <span className={cx('icon', 'building-icon')}></span>
                    Quản Lý Toà Nhà
                </h1>
                <Link to={`/admin/house/add`}>
                    <button className={cx('add-button')}>
                        <span className={cx('icon', 'plus-icon')}></span>
                        Thêm nhà mới
                    </button>
                </Link>
            </div>

            <div className={cx('card-list')}>
                {keycards.map((card) => (
                    <Link to={`/admin/house/room`}>
                        <div key={card.id} className={cx('card')}>
                            <div className={cx('card-header')}>
                                <span className={cx('icon', 'card-icon')}></span>
                                <span className={cx('card-code')}>{card.cardCode}</span>
                                <div className={cx('actions')}>
                                    <button className={cx('edit-button')}>
                                        <span className={cx('icon', 'edit-icon')}></span>
                                    </button>
                                    <button className={cx('delete-button')}>
                                        <span className={cx('icon', 'trash-icon')}></span>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('card-body')}>
                                <p>Tên: {card.name}</p>
                                <p>Địa chỉ: {card.address}</p>
                                <p>Tổng phòng: {card.totalRooms}</p>
                                <p
                                    className={cx('status', {
                                        active: card.status === 'Hoạt động',
                                        inactive: card.status !== 'Hoạt động',
                                    })}
                                >
                                    {card.status}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Properties;
