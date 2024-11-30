import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InputWaterElectric.module.scss'; // Assuming you are using SCSS modules

const cx = classNames.bind(styles); // Create a className function bound to styles

function InputWaterElectric() {
    const [electricityReading, setElectricityReading] = useState('');
    const [waterReading, setWaterReading] = useState('');
    const [readings, setReadings] = useState([]);

    const handleSubmit = (e) => {

    };

    return (
        <div className={cx('meter-reading')}>
            <div className={cx('meter-reading__form')}>
                <h2>Nhập Chỉ Số Điện Và Nước</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <label>Chỉ Số Điện (kWh)</label>
                        <input
                            type="number"
                            value={electricityReading}
                            onChange={(e) => setElectricityReading(e.target.value)}
                            placeholder="Nhập chỉ số điện"
                            required
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <label>Chỉ Số Nước (m³)</label>
                        <input
                            type="number"
                            value={waterReading}
                            onChange={(e) => setWaterReading(e.target.value)}
                            placeholder="Nhập chỉ số nước"
                            required
                        />
                    </div>
                    <button type="submit">Gửi Email</button>
                </form>
            </div>

        </div>
    );
}

export default InputWaterElectric;
