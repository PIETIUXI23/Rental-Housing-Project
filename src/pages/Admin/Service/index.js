import React, { useState } from 'react';
import styles from './Service.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ServiceList = () => {
    const [services, setServices] = useState([
        { name: 'Điện', type: 'ĐIỆN', price: 3000, active: true },
        { name: 'Gửi xe máy', type: 'KHÁC', price: 80000, active: true },
        { name: 'Nước', type: 'NƯỚC', price: 20000, active: true },
        { name: 'Rác', type: 'KHÁC', price: 50000, active: true },
    ]);

    // Hàm xử lý thêm dịch vụ
    const handleAddService = () => {
        const newService = { name: 'Dịch vụ mới', type: 'KHÁC', price: 10000, active: true };
        setServices((prevServices) => [...prevServices, newService]);
    };

    // Hàm xử lý xóa dịch vụ
    const handleDeleteService = (index) => {
        setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    };

    // Hàm chỉnh sửa dịch vụ
    const handleEditService = (index) => {
        const updatedServices = [...services];
        updatedServices[index].name =
            prompt('Nhập tên mới:', updatedServices[index].name) || updatedServices[index].name;
        setServices(updatedServices);
    };

    return (
        <div className={cx('col-md-12', 'col-sm-12', 'col-xs-12')}>
            <div className={cx('xPanel')}>
                <div className={cx('xTitle')}>
                    <h2>
                        <strong>Danh sách dịch vụ</strong>
                    </h2>
                    <ul className={cx('panelToolbox')}>
                        <li>
                            <button className={cx('btn', 'btn-success')} onClick={handleAddService}>
                                <i className="fa fa-plus"></i> Thêm dịch vụ
                            </button>
                        </li>
                        <li>
                            <button className={cx('btn', 'btn-danger')} id="deleteManyButton">
                                <i className="fa fa-remove"></i> Xóa
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={cx('xContent')}>
                    <table className={cx('dataTable')}>
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" id="checkAll" />
                                </th>
                                <th>Hành động</th>
                                <th>Tên</th>
                                <th>Loại dịch vụ</th>
                                <th>Đơn giá (VNĐ)</th>
                                <th>Đang dùng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>
                                        <button
                                            className={cx('btn', 'btn-success')}
                                            onClick={() => handleEditService(index)}
                                        >
                                            <i className="fa fa-edit" style={{ margin: '5px' }}></i>
                                        </button>
                                        <button
                                            className={cx('btn', 'btn-danger')}
                                            onClick={() => handleDeleteService(index)}
                                        >
                                            <i className="fa fa-remove" style={{ margin: '5px' }}></i>
                                        </button>
                                    </td>
                                    <td>{service.name}</td>
                                    <td>{service.type}</td>
                                    <td>{service.price.toLocaleString()}</td>
                                    <td>
                                        <input type="checkbox" checked={service.active} disabled />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
