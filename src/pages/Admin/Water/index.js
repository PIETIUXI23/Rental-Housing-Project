import React from 'react';
import './index.module.scss';
function WaterIndex() {
    return (
        <div className="row">
            <div className="clearfix"></div>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                    <div className="x_title">
                        <h2 style={{ display: 'inline-block' }}>
                            <strong>Chỉ số nước</strong>
                        </h2>
                        <ul className="nav navbar-right panel_toolbox">
                            <li>
                                <button className="btn btn-warning" type="button" id="watchButton">
                                    <i className="fa fa-search"></i> Xem
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-success" type="button" id="saveButton">
                                    <i className="fa fa-check"></i> Lưu
                                </button>
                            </li>
                            <li>
                                <div id="exportExcel" style={{ display: 'inline-block' }}>
                                    <div className="dt-buttons btn-group">
                                        <a
                                            className="btn btn-default buttons-excel buttons-html5 btn-primary"
                                            href="#"
                                        >
                                            <span>
                                                <i className="fa fa-file-excel-o"></i> Xuất file excel
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="x_content">
                        <form
                            data-parsley-validate
                            className="form-horizontal form-label-left"
                            method="post"
                            id="formRoomRent"
                        >
                            {/* Bộ lọc dữ liệu */}
                            <div className="form-group">
                                <label
                                    className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-2"
                                    htmlFor="monthYear"
                                >
                                    Tháng/năm
                                </label>
                                <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                    <input
                                        type="text"
                                        id="monthYear"
                                        name="monthYear"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                    <label style={{ width: '15%', float: 'left' }}>Kỳ</label>
                                    <select
                                        style={{ width: '85%', float: 'left' }}
                                        id="payType"
                                        className="form-control"
                                    >
                                        <option value="-1">Tất cả</option>
                                        <option value="1">Kỳ 15</option>
                                        <option value="2">Kỳ 30</option>
                                    </select>
                                </div>
                                <label
                                    className="col-fhd-1 col-xlg-1 col-md-1 col-sm-12 col-xs-2"
                                    htmlFor="areaID"
                                >
                                    Nhà
                                </label>
                                <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                    <select id="areaID" className="form-control">
                                        <option value="-1">Tất cả</option>
                                    </select>
                                </div>
                                <label
                                    className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2"
                                    htmlFor="statusRoom"
                                >
                                    Trạng thái phòng
                                </label>
                                <div className="col-fhd-2 col-xlg-2 col-md-2 col-sm-12 col-xs-2">
                                    <select id="statusRoom" className="form-control">
                                        <option value="-1">Tất cả</option>
                                        <option value="1">Còn trống</option>
                                        <option value="2">Đã cho thuê</option>
                                    </select>
                                </div>
                            </div>

                            {/* Ghi chú */}
                            <div className="form-group">
                                <p>
                                    <strong>Lưu ý:</strong>
                                    <br />- Bạn phải gán dịch vụ thuộc loại nước cho khách thuê trước
                                    thì phần chỉ số này mới được tính cho phòng đó khi tính tiền.
                                    <br />- Đối với lần đầu tiên sử dụng phần mềm bạn sẽ phải nhập chỉ
                                    số cũ và mới cho tháng sử dụng đầu tiên, các tháng tiếp theo phần
                                    mềm sẽ tự động lấy chỉ số mới tháng trước làm chỉ số cũ tháng sau.
                                </p>
                            </div>

                            {/* Checkbox */}
                            <div className="row">
                                <div className="col-md-7"></div>
                                <div className="col-md-5">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="CheckError"
                                        defaultChecked
                                    />
                                    <label htmlFor="CheckError">
                                        Cảnh báo chỉ số nước cũ lớn hơn chỉ số nước mới
                                    </label>
                                </div>
                            </div>

                            {/* Bảng dữ liệu */}
                            <div className="form-group">
                                <table
                                    id="table"
                                    className="table table-striped table-bordered"
                                    cellSpacing="0"
                                    width="100%"
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ width: '15%' }}>Nhà</th>
                                            <th style={{ width: '15%' }}>Phòng</th>
                                            <th style={{ width: '25%' }}>Khách thuê</th>
                                            <th style={{ width: '15%' }}>CS Nước Cũ</th>
                                            <th style={{ width: '15%' }}>CS Nước Mới</th>
                                            <th style={{ width: '15%' }}>Sử Dụng</th>
                                            <th style={{ minWidth: '40px', width: '41px' }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array(4)
                                            .fill()
                                            .map((_, i) => (
                                                <tr key={i}>
                                                    <td>Tầng 1</td>
                                                    <td>{i + 1}</td>
                                                    <td></td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            style={{ textAlign: 'right' }}
                                                            name="oldValue"
                                                            defaultValue="0"
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            style={{ textAlign: 'right' }}
                                                            name="newValue"
                                                            defaultValue="0"
                                                        />
                                                    </td>
                                                    <td style={{ textAlign: 'right' }}>0</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn-xs"
                                                            name="saveRow"
                                                        >
                                                            <i className="fa fa-save"></i> Lưu
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WaterIndex;
