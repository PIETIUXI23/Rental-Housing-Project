import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './RoomManager.module.scss';
import { useParams } from 'react-router-dom'; // Hook để lấy id từ URL
import axios from 'axios';
import auth from '~/utils/auth';

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

    const { id } = useParams(); // Lấy id housse từ URL
    const [rooms, setRooms] = useState([]);
    const [url] = useState(process.env.REACT_APP_API_HOUSES_ROOMS);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${url}/house/${id}`)
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

    const handleDeleteRoom = (roomId) => {
        axios
            .delete(`${url}/${roomId}`)
            .then((response) => {
                alert('Phòng đã được xóa thành công!');
                // Cập nhật lại danh sách phòng sau khi xóa
                setRooms(rooms.filter(room => room.id !== roomId));  // Loại bỏ phòng khỏi danh sách
            })
            .catch((error) => {
                console.error('Có lỗi khi xóa phòng:', error);
                alert('Đã xảy ra lỗi khi xóa phòng.');
            });
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
                    <Link to={`/admin/service/${room.id}`} key={room.id}>
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
                                            {room.occupancyStatus === 0 ? 'Chưa có khách' : 'Có khách'}
                                        </span>
                                    </p>
                                    <p>
                                        <i className="fa fa-money"></i>{' '}
                                        <span className={cx('price')}>{room.price.toLocaleString()} VNĐ</span>
                                    </p>
                                </div>
                                <div className={cx('room-actions')}>
                                    <Link to={`/admin/room/edit/${room.id}`}>
                                        <button
                                            className={cx('btn', 'btn-primary')}
                                            onClick={(e) => {
                                                e.stopPropagation(); // Ngăn sự kiện lan lên thẻ `div`
                                            }}
                                        >
                                            <i className="fa fa-edit"></i> Chỉnh sửa
                                        </button>
                                    </Link>
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
