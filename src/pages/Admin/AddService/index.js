import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddService.module.scss';
import { useParams } from 'react-router-dom'; // Hook để lấy id từ URL
import axios from 'axios';

const cx = classNames.bind(styles);

const AddRoom = () => {
    const { id } = useParams();
    const [url] = useState(process.env.REACT_APP_API_ROOM_SERVICES);
    const [newService, setNewService] = useState({
        name: '',
        cost: '',
        createdAt: new Date().toISOString().split('T')[0],
        unit: '', // Sửa thành kiểu số nguyên
        room: {
            id: `${id}`,
        },
    });
    // const [services, setServices] = useState([]); // Lưu trữ các dịch vụ trong trạng thái

    // Lấy danh sách dịch vụ khi component được mount
    // const fetchServices = () => {
    //     axios
    //         .get(`${url}/${id}`) // Lấy dịch vụ từ API
    //         .then((response) => {
    //             setServices(response.data); // Cập nhật lại danh sách dịch vụ
    //         })
    //         .catch((error) => {
    //             console.error('Có lỗi khi lấy dịch vụ:', error);
    //         });
    // };

    // // Gọi fetchServices khi component mount
    // React.useEffect(() => {
    //     fetchServices();
    // }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Nếu là unit, chuyển giá trị thành kiểu số
        if (name === 'unit') {
            setNewService((prev) => ({
                ...prev,
                [name]: value ? parseInt(value, 10) : '', // Nếu không có giá trị, để trống
            }));
        } else {
            setNewService((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const addService = () => {
        if (!newService.name || !newService.cost || !newService.unit) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        // Gửi yêu cầu POST để thêm dịch vụ mới
        axios
            .post(`${url}`, {
                name: newService.name,
                cost: parseFloat(newService.cost),
                createdAt: new Date().toISOString().split('T')[0],
                unit: newService.unit,
                room: {
                    id: `${id}`,
                },
            })
            .then((response) => {
                // Reset form
                setNewService({
                    name: '',
                    cost: '',
                    createdAt: new Date().toISOString().split('T')[0],
                    unit: '', // Sửa thành kiểu số nguyên
                    room: {
                        id: `${id}`,
                    },
                });
                alert('Dịch vụ đã được thêm thành công!');
                window.history.back();
            })
            .catch((error) => {
                console.error('Có lỗi khi thêm dịch vụ:', error);
                alert('Đã xảy ra lỗi khi thêm dịch vụ.');
            });
    };


    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Quản Lý Dịch Vụ Phòng Trọ</h2>

            <div className={cx('form')}>
                <div className={cx('form-group')}>
                    <label className={cx('label')}>Tên Dịch Vụ</label>
                    <input
                        name="name"
                        value={newService.name}
                        onChange={handleInputChange}
                        placeholder="Nhập tên dịch vụ"
                        className={cx('input')}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Giá</label>
                    <input
                        name="cost"
                        type="number"
                        value={newService.cost}
                        onChange={handleInputChange}
                        placeholder="Nhập giá"
                        className={cx('input')}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Đơn Vị</label>
                    <input
                        name="unit"
                        type="number" // Đảm bảo kiểu số
                        value={newService.unit}
                        onChange={handleInputChange}
                        placeholder="Nhập đơn vị (VD: kWh, m3)"
                        className={cx('input')}
                    />
                </div>

                <button onClick={addService} className={cx('button', 'button-add')}>
                    Thêm Dịch Vụ
                </button>
            </div>
        </div>
    );
};

export default AddRoom;
