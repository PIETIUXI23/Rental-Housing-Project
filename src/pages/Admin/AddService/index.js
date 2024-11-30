import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './AddService.module.scss';

const cx = classNames.bind(styles);

const RoomServiceManagement = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Điện',
            price: 3500,
            unit: 'kWh',
            createdAt: new Date('2024-01-15'),
        },
        {
            id: 2,
            name: 'Nước',
            price: 6000,
            unit: 'm3',
            createdAt: new Date('2024-02-01'),
        },
    ]);

    const [newService, setNewService] = useState({
        name: '',
        price: '',
        unit: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const addService = () => {
        if (!newService.name || !newService.price || !newService.unit) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        const serviceToAdd = {
            id: services.length + 1,
            name: newService.name,
            price: parseFloat(newService.price),
            unit: newService.unit,
            createdAt: new Date(),
        };

        setServices([...services, serviceToAdd]);

        // Reset form
        setNewService({
            name: '',
            price: '',
            unit: '',
        });
    };

    const deleteService = (id) => {
        setServices(services.filter((service) => service.id !== id));
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
                        name="price"
                        type="number"
                        value={newService.price}
                        onChange={handleInputChange}
                        placeholder="Nhập giá"
                        className={cx('input')}
                    />
                </div>

                <div className={cx('form-group')}>
                    <label className={cx('label')}>Đơn Vị</label>
                    <input
                        name="unit"
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

            <div className={cx('service-list')}>
                {services.map((service) => (
                    <div key={service.id} className={cx('service-item')}>
                        <div>
                            <div className={cx('service-name')}>{service.name}</div>
                            <div className={cx('service-details')}>
                                {service.price.toLocaleString()} VNĐ / {service.unit}
                            </div>
                            <div className={cx('service-date')}>Ngày tạo: {service.createdAt.toLocaleDateString()}</div>
                        </div>
                        <button onClick={() => deleteService(service.id)} className={cx('button', 'button-delete')}>
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomServiceManagement;
