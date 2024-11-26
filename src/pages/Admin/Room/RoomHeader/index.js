import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RoomHeader.module.scss';

const cx = classNames.bind(styles);

const RoomHeader = () => {
    const [roomStatus, setRoomStatus] = useState('-1');
    const [paymentStatus, setPaymentStatus] = useState('-1');
    const [roomName, setRoomName] = useState('');

    // Sample data
    const stats = {
        emptyRooms: 5,
        rentedRooms: 0,
        unpaidRooms: 0,
    };

    const handleSearch = () => {
        console.log('Searching with:', { roomStatus, paymentStatus, roomName });
    };

    return (
        <div className={cx('container')}>
            {/* Title */}
            <div className={cx('title')}>
                <h2>Danh sách phòng</h2>
            </div>

            {/* Search Controls */}
            <div className={cx('search_controls')}>
                {/* Room Status Select */}
                <div className={cx('select_container')}>
                    <select
                        value={roomStatus}
                        onChange={(e) => setRoomStatus(e.target.value)}
                        className={cx('form_select')}
                    >
                        <option value="-1">- Trạng thái phòng -</option>
                        <option value="1">Còn trống</option>
                        <option value="2">Đã cho thuê</option>
                    </select>
                </div>

                {/* Payment Status Select */}
                <div className={cx('select_container')}>
                    <select
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        className={cx('form_select')}
                    >
                        <option value="-1">- Trạng thái phí -</option>
                        <option value="2">Chưa thu phí</option>
                    </select>
                </div>

                {/* Room Name Input */}
                <div className={cx('input_container')}>
                    <input
                        type="text"
                        placeholder="Phòng"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        className={cx('form_input')}
                    />
                </div>

                {/* Search Button */}
                <button onClick={handleSearch} className={cx('btn', 'btn_primary')}>
                    <i className="fa fa-search"></i> Tìm kiếm
                </button>
            </div>

            {/* Stats Bar */}
            <div className={cx('stats_bar')}>
                <span className={cx('stat_item')}>Còn trống {stats.emptyRooms}</span>
                <span className={cx('stat_item')}>Đã cho thuê {stats.rentedRooms}</span>
                <span className={cx('stat_item')}>Chưa thu phí {stats.unpaidRooms}</span>
            </div>

            {/* Action Buttons */}
            <div className={cx('action_buttons')}>
                <button className={cx('btn', 'btn_warning')}>
                    <i className="fa fa-upload"></i> Nhập phòng từ excel
                </button>

                <button className={cx('btn', 'btn_primary')}>
                    <i className="fa fa-users"></i> Khách thuê
                </button>

                <button className={cx('btn', 'btn_info')}>
                    <i className="fa fa-list-ol"></i> Phòng
                </button>

                <button className={cx('btn', 'btn_success')}>
                    <i className="fa fa-university"></i> Thêm nhà
                </button>
            </div>
        </div>
    );
};

export default RoomHeader;
