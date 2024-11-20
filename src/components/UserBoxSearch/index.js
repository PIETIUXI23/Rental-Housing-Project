import Button from '~/components/Button';
import styles from './UserBoxSearch.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Wrapper from '../Popper/Wrapper';

const cx = classNames.bind(styles);

function UserBoxSearch() {
    const [cityData, setCityData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [communeData, setCommuneData] = useState([]);

    const [selectedCity, setSelectedCity] = useState({ id: '', name: '' });
    const [selectedDistrict, setSelectedDistrict] = useState({ id: '', name: '' });
    const [selectedCommune, setSelectedCommune] = useState({ id: '', name: '' });

    const handleCityChange = (e) => {
        let selectedId = e.target.value;
        let selectedName = cityData.find((city) => (city.id === selectedId ? city.name : ''));
        setSelectedCity({ id: selectedId, name: selectedName });
    };
    const handleDistrictChange = (e) => {
        let selectedId = e.target.value;
        let selectedName = districtData.find((district) => (district.id === selectedId ? district.name : ''));
        setSelectedDistrict({ id: selectedId, name: selectedName });
    };
    const handleCommuneChange = (e) => {
        let selectedId = e.target.value;
        let selectedName = communeData.find((commune) => (commune.id === selectedId ? commune.name : ''));
        setSelectedCommune({ id: selectedId, name: selectedName });
    };

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_CITY}`).then((response) => setCityData(response.data.data));
    }, []);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_DISTRICT + selectedCity.id}.htm`)
            .then((response) => setDistrictData(response.data.data));
        setCommuneData([]);
        setSelectedDistrict({ id: '', name: '' });
        setSelectedCommune({ id: '', name: '' });
    }, [selectedCity]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_COMMUNE + selectedDistrict.id}.htm`)
            .then((response) => setCommuneData(response.data.data));
        setSelectedCommune({ id: '', name: '' });
    }, [selectedDistrict]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('location-search-box')}>
                <div className={cx('city-box')}>
                    <Button className={cx('select-box')} leftIcon={<FontAwesomeIcon icon={faLocationDot} />}>
                        <select className={cx('dropdown')} onChange={handleCityChange}>
                            <option value="">Chọn thành phố</option>
                            {cityData.map((city) => {
                                return (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                );
                            })}
                        </select>
                    </Button>
                </div>
                <div className={cx('district-box')}>
                    <Button className={cx('select-box')} leftIcon={<FontAwesomeIcon icon={faLocationDot} />}>
                        <select className={cx('dropdown')} onChange={handleDistrictChange} disabled={!selectedCity.id}>
                            <option value="">Chọn huyện</option>
                            {districtData.map((district) => (
                                <option key={district.id} value={district.id}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </Button>
                </div>
                <div className={cx('commune-box')}>
                    <Button className={cx('select-box')} leftIcon={<FontAwesomeIcon icon={faLocationDot} />}>
                        <select
                            className={cx('dropdown')}
                            onChange={handleCommuneChange}
                            disabled={!selectedDistrict.id}
                        >
                            <option value="">Chọn xã</option>
                            {communeData.map((commune) => (
                                <option key={commune.id} value={commune.id}>
                                    {commune.name}
                                </option>
                            ))}
                        </select>
                    </Button>
                </div>
                <div className={cx('btn-box')}>
                    <button className={cx('btn-search')}>Tìm kiếm</button>
                </div>
            </div>
            <div className={cx('select-search-box')}>
                <Tippy
                    zIndex={1000}
                    offset={[0, 0]}
                    interactive={true}
                    // visible={true}
                    //onClickOutside={handleCloseDropdown}
                    render={(attrs) => {
                        return (
                            <div className={cx('stored-list')} tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('stored-popper')}>
                                    <div className={cx('popper-header')}>Tin đăng đã lưu</div>
                                    <div className={cx('popper-body')}></div>
                                </Wrapper>
                            </div>
                        );
                    }}
                >
                    <Button
                        className={cx('cost-selection')}
                        outline
                        rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                    >
                        Mức giá
                    </Button>
                </Tippy>
                <Tippy
                    zIndex={1000}
                    offset={[0, 0]}
                    interactive={true}
                    visible={false}
                    // onClickOutside={handleCloseDropdown}
                    render={(attrs) => {
                        return (
                            <div className={cx('stored-list')} tabIndex="-1" {...attrs}>
                                <Wrapper className={cx('stored-popper')}>
                                    <div className={cx('popper-header')}>Tin đăng đã lưu</div>
                                    <div className={cx('popper-body')}></div>
                                </Wrapper>
                            </div>
                        );
                    }}
                >
                    <Button
                        className={cx('area-selection')}
                        outline
                        rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
                    >
                        Diện tích
                    </Button>
                </Tippy>
            </div>
        </div>
    );
}

export default UserBoxSearch;
