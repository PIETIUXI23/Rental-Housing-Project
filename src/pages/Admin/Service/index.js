import React, { useState, useEffect } from 'react';
import styles from './Service.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';

const cx = classNames.bind(styles);

const ServiceList = () => {
    const [services, setServices] = useState([
        { name: 'Điện', type: 'ĐIỆN', price: 3000, active: true },
        { name: 'Gửi xe máy', type: 'KHÁC', price: 80000, active: true },
        { name: 'Nước', type: 'NƯỚC', price: 20000, active: true },
        { name: 'Rác', type: 'KHÁC', price: 50000, active: true },
    ]);


    // const [services, setServices] = useState([]);
    // const [url] = useState(process.env.REACT_APP_API_ROOM_SERVICES);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     axios
    //         .get(`${url}`)
    //         .then((response) => {
    //             console.log('API Response:', response.data);
    //             setServices(response.data || []); // fallback nếu response trống
    //         })
    //         .catch((err) => {
    //             console.error('API Error:', err.response || err.message);
    //             setError(err.response?.data?.message || err.message);
    //         });
    // }, []);

    const handleAddService = () => {
        // const newService = { name: 'Dịch vụ mới', type: 'KHÁC', price: 10000, active: true };
        // setServices((prevServices) => [...prevServices, newService]);
    };

    const handleDeleteService = (index) => {
        // setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    };

    const handleEditService = (index) => {
        // setServices((prevServices) =>
        //     prevServices.map((service, i) =>
        //         i === index ? { ...service, name: prompt('Nhập tên mới:', service.name) || service.name } : service,
        //     ),
        // );
    };

    // if (error) {
    //     return <div>Lỗi: {error}</div>;
    // }

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
                                <th>Đơn giá (VNĐ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.length > 0 ? (
                                services.map((service, index) => (
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
                                        <td>{service.cost}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Không có dữ liệu</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
