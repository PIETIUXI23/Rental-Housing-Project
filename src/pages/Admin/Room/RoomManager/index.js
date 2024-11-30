import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './RoomManager.module.scss';
import axios from 'axios';

// Khai báo cx sử dụng classNames và bind với styles
const cx = classNames.bind(styles);

const RoomManager = () => {
    // const [rooms, setRooms] = useState([
    //     { id: 45040, name: '1', price: 3000000, status: 'empty' },
    //     { id: 45041, name: '2', price: 3000000, status: 'empty' },
    //     { id: 45042, name: '3', price: 3000000, status: 'empty' },
    //     { id: 45043, name: '4', price: 3000000, status: 'empty' },
    //     { id: 45044, name: '5', price: 3000000, status: 'empty' },
    // ]);

    const [rooms, setRooms] = useState([]);
    const [url] = useState(process.env.REACT_APP_API_HOUSES_ROOMS);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${url}`)
            .then((response) => {
                console.log('API Response:', response.data);
                setRooms(response.data || []); // fallback nếu response trống
            })
            .catch((err) => {
                console.log(`${url}`);
                console.error('API Error:', err.response || err.message);
                setError(err.response?.data?.message || err.message);
            });
    }, []);

    const handleAddCustomer = (roomId) => {
        alert(`Thêm khách vào phòng ${roomId}`);
    };

    const handleEditRoom = (roomId) => {
        alert(`Chỉnh sửa phòng ${roomId}`);
    };

    const handleDeleteRoom = (roomId) => {
        setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    };

    return (
        <div className={cx('container')}>
            <div className={cx('stats-bar')}>
                <span>Còn trống {rooms.filter((room) => room.status === 'empty').length}</span>
                <span>Đã cho thuê 0</span>
                <span>Chưa thu phí 0</span>
            </div>

            <div className={cx('rooms')}>
                {rooms.map((room) => (
                    <Link to={`/admin/service`} key={room.id}>
                        <div className={cx('room')}>
                            <div className={cx('thumbnail')}>
                                <div className={cx('room-header')}>
                                    <strong>
                                        <i className="fa fa-home" aria-hidden="true"></i> {room.roomNumber}
                                    </strong>
                                </div>
                                <button className={cx('btn', 'btn-info')} onClick={() => handleAddCustomer(room.id)}>
                                    Thêm khách
                                </button>

                                <div className={cx('room-details')}>
                                    <p>
                                        <i className="fa fa-user"></i>{' '}
                                        <span
                                            className={cx(
                                                room.occupancyStatus === 1 ? 'status-empty' : 'status-occupied',
                                            )}
                                        >
                                            {room.status === 'empty' ? 'Chưa có khách' : 'Có khách'}
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-money"></i>{' '}
                                        <span className={cx('price')}>{room.price.toLocaleString()} VNĐ</span>
                                    </p>
                                </div>
                                <div className={cx('room-actions')}>
                                    <button
                                        className={cx('btn', 'btn-primary')}
                                        onClick={(e) => {
                                            e.preventDefault(); // Ngăn sự kiện lan lên thẻ `div`
                                            handleEditRoom(room.id);
                                        }}
                                    >
                                        <i className="fa fa-edit"></i> Chỉnh sửa
                                    </button>
                                    <button
                                        className={cx('btn', 'btn-danger')}
                                        onClick={(e) => {
                                            e.preventDefault(); // Ngăn sự kiện lan lên thẻ `div`
                                            handleDeleteRoom(room.id);
                                        }}
                                    >
                                        <i className="fa fa-trash"></i> Xóa
                                    </button>

                                    <Link to={`/admin/inpWE`}>
                                        <button
                                            className={cx('btn', 'btn-info')}
                                            onClick={(e) => {
                                                e.stopPropagation(); // Ngăn sự kiện lan lên thẻ `div`
                                            }}
                                        >
                                            <i className="fa fa-credit-card"></i> Thanh toán
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RoomManager;
