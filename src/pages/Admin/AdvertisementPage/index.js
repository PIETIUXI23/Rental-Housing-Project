import classNames from 'classnames/bind';
import styles from './AdvertisementPage.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const advertisementsData = [
    // Sample data, replace with API data
    {
        id: 1,
        title: 'Beautiful Apartment',
        description: 'Spacious and well-lit.',
        cost: 1500,
        status: 1, // 1: Active, 0: Pending
    },
    {
        id: 2,
        title: 'Cozy Studio',
        description: 'Perfect for singles.',
        cost: 800,
        status: 0,
    },
];

const AdvertisementPage = () => {
    const [advertisements, setAdvertisements] = useState(advertisementsData);
    const [newAd, setNewAd] = useState({ title: '', description: '', cost: '', status: 0 });

    const handleAdd = () => {
        const newAdvertisement = {
            ...newAd,
            id: advertisements.length + 1,
            status: 0,
        };
        setAdvertisements([...advertisements, newAdvertisement]);
        setNewAd({ title: '', description: '', cost: '', status: 0 });
    };

    const handleEdit = (id) => {
        const title = prompt('Enter new title:', '');
        const description = prompt('Enter new description:', '');
        const cost = prompt('Enter new cost:', '');
        if (title && description && cost) {
            setAdvertisements(
                advertisements.map((ad) => (ad.id === id ? { ...ad, title, description, cost: parseFloat(cost) } : ad)),
            );
        }
    };

    const handleDelete = (id) => {
        setAdvertisements(advertisements.filter((ad) => ad.id !== id));
    };

    const handleFilter = (status) => {
        return advertisements.filter((ad) => ad.status === status);
    };

    return (
        <div className={cx('container')}>
            <h1>Advertisements</h1>

            {/* Filter Buttons */}
            <div className={cx('filter-buttons')}>
                <button onClick={() => setAdvertisements(handleFilter(1))}>Current Ads</button>
                <button onClick={() => setAdvertisements(handleFilter(0))}>Pending Ads</button>
            </div>

            {/* Advertisement List */}
            <div className={cx('advertisement-list')}>
                {advertisements.map((ad) => (
                    <div key={ad.id} className={cx('advertisement')}>
                        <div className={cx('content')}>
                            <h3>{ad.title}</h3>
                            <p>Địa chỉ: {ad.description}</p>
                            <p>Giá: ${ad.cost}</p>
                            <p>Trạng thái: {ad.status === 1 ? 'Active' : 'Pending'}</p>
                        </div>
                        <div></div>
                        <div className={cx('actions')}>
                            <button onClick={() => handleEdit(ad.id)}>Edit</button>
                            <button className={cx('delete')} onClick={() => handleDelete(ad.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvertisementPage;
