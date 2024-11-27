import React from 'react';

import './index.module.scss';

function Electric() {
    return (
        <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
                <div className="x_title">
                    <h2 style={{ display: 'inline-block' }}><strong>Chỉ số điện</strong></h2>
                    <ul className="nav navbar-right panel_toolbox">
                        <li>
                            <button className="btn btn-warning" type="button" id="watchButton">
                                <i className="fa fa-search"></i> Xem
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-success" type="button" id="saveButton" style={{ display: 'inline-block;' }}>
                                <i className="fa fa-check"></i> Lưu
                            </button>
                        </li>
                        <li>
                            <div id="exportExcel" style={{ display: 'inline-block' }}>
                                <div className="dt-buttons btn-group">
                                    <a className="btn btn-default buttons-excel buttons-html5 btn-primary" tabindex="0" aria-controls="table" href="#">
                                        <span><i className="fa fa-file-excel-o"></i> Xuất file excel</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="x_content">
                    <form data-parsley-validate="" className="form-horizontal form-label-left" method="post" id="formRoomRent">
                        <div className="form-group">
                            <label className="col-md-1 col-sm-12 col-xs-2" htmlFor="serviceName">Tháng/năm</label>
                            <div className="col-md-2 col-sm-12 col-xs-2">
                                <input type="text" id="monthYear" name="monthYear" className="form-control" />
                            </div>
                            <div className="col-md-2 col-sm-12 col-xs-2">
                                <label style={{ width: '15%', float: 'left' }}>Kỳ</label>
                                <div className="select2-container" id="s2id_payType" style={{ width: '85%' }}>
                                    <a href="javascript:void(0)" onClick="return false;" className="select2-choice" tabIndex="-1">
                                        <span className="select2-chosen">Tất cả</span><abbr className="select2-search-choice-close"></abbr>
                                        <span className="select2-arrow"><b></b></span>
                                    </a>
                                    <select style={{ width: '85%', float: 'left' }} id="payType" tabIndex="-1" className="select2-offscreen">
                                        <option value="-1" selected="">Tất cả</option>
                                        <option value="1">Kỳ 15</option>
                                        <option value="2">Kỳ 30</option>
                                    </select>
                                </div>
                            </div>
                            <label className="col-md-1 col-sm-12 col-xs-2">Nhà</label>
                            <div className="col-md-2 col-sm-12 col-xs-2">
                                <input type="text" style={{ width: '100%' }} name="areaID" id="areaID" className="form-control" />
                            </div>
                            <label className="col-md-2 col-sm-12 col-xs-2">Trạng thái phòng</label>
                            <div className="col-md-2 col-sm-12 col-xs-2">
                                <select style={{ width: '100%' }} id="statusRoom" className="form-control">
                                    <option value="-1" selected="">Tất cả</option>
                                    <option value="1">Còn trống</option>
                                    <option value="2">Đã cho thuê</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <p><strong>Lưu ý:</strong><br />
                                - Bạn phải gán dịch vụ thuộc loại điện cho khách thuê trước thì phần chỉ số này mới được tính cho phòng đó khi tính tiền.<br />
                                - Đối với lần đầu tiên sử dụng phần mềm bạn sẽ phải nhập chỉ số cũ và mới cho tháng sử dụng đầu tiên, các tháng tiếp theo phần mềm sẽ tự động lấy chỉ số mới tháng trước làm chỉ số cũ tháng sau.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-5">
                                <input className="form-check-input" type="checkbox" value="" id="CheckError" checked="" />
                                <label>Cảnh báo chỉ số điện cũ lớn hơn chỉ số điện mới</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div id="table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table id="table" className="table table-striped table-bordered no-footer dataTable dtr-inline" cellspacing="0" width="100%" role="grid">
                                            <thead>
                                                <tr role="row">
                                                    <th>Nhà</th>
                                                    <th>Phòng</th>
                                                    <th>Khách thuê</th>
                                                    <th>CS Điện Cũ</th>
                                                    <th>CS Điện Mới</th>
                                                    <th>Sử dụng</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tầng 1</td>
                                                    <td>1</td>
                                                    <td>Văn Danh Phúc</td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="5" /></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="10" /></td>
                                                    <td>5.0</td>
                                                    <td><button type="button" className="btn btn-info btn-xs"><i className="fa fa-save"></i> Lưu</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Tầng 1</td>
                                                    <td>2</td>
                                                    <td></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td>0.0</td>
                                                    <td><button type="button" className="btn btn-info btn-xs"><i className="fa fa-save"></i> Lưu</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Tầng 1</td>
                                                    <td>3</td>
                                                    <td></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td>0.0</td>
                                                    <td><button type="button" className="btn btn-info btn-xs"><i className="fa fa-save"></i> Lưu</button></td>
                                                </tr>
                                                <tr>
                                                    <td>Tầng 1</td>
                                                    <td>4</td>
                                                    <td></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td><input type="text" className="form-control" style={{ textAlign: 'right;' }} value="0" /></td>
                                                    <td>0.0</td>
                                                    <td><button type="button" className="btn btn-info btn-xs"><i className="fa fa-save"></i> Lưu</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Electric;
