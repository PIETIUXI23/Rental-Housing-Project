import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RoomManager.module.scss';

const cx = classNames.bind(styles);

const RoomManager = () => {
    const [rooms, setRooms] = useState([
        { id: 45040, name: '1', price: 3000000, status: 'empty' },
        { id: 45041, name: '2', price: 3000000, status: 'empty' },
        { id: 45042, name: '3', price: 3000000, status: 'empty' },
        { id: 45043, name: '4', price: 3000000, status: 'empty' },
        { id: 45044, name: '5', price: 3000000, status: 'empty' },
    ]);

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
                    <div className={cx('room')} key={room.id}>
                        <div className={cx('thumbnail')}>
                            <div className={cx('room-header')}>
                                <strong>
                                    <i className="fa fa-home" aria-hidden="true"></i> {room.name}
                                </strong>
                            </div>
                            <button className={cx('btn', 'btn-info')} onClick={() => handleAddCustomer(room.id)}>
                                Thêm khách
                            </button>
                            <div className={cx('room-details')}>
                                <p>
                                    <i className="fa fa-user"></i>{' '}
                                    <span className={cx(room.status === 'empty' ? 'status-empty' : 'status-occupied')}>
                                        {room.status === 'empty' ? 'Chưa có khách' : 'Có khách'}
                                    </span>
                                </p>
                                <p>
                                    <i className="fa fa-money"></i>{' '}
                                    <span className={cx('price')}>{room.price.toLocaleString()} VNĐ</span>
                                </p>
                            </div>
                            <div className={cx('room-actions')}>
                                <button className={cx('btn', 'btn-primary')} onClick={() => handleEditRoom(room.id)}>
                                    <i className="fa fa-edit"></i> Chỉnh sửa
                                </button>
                                <button className={cx('btn', 'btn-danger')} onClick={() => handleDeleteRoom(room.id)}>
                                    <i className="fa fa-trash"></i> Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomManager;
