import React, { useEffect } from 'react';
//import 'datatables.net-bs/css/dataTables.bootstrap.min.css';
//import 'datatables.net-buttons-bs/css/buttons.bootstrap.min.css';
//import 'src/Extension/datatables.net-select/css/select.dataTables.css';
//import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css';
//import 'datatables.net-responsive-bs/css/responsive.bootstrap.min.css';
//import 'datatables.net-scroller-bs/css/scroller.bootstrap.min.css';
import 'chart.js/auto';
import $ from 'jquery';
import DataTable from 'datatables.net-bs';
import { Chart } from 'chart.js';
import './index.module.scss';

function Home() {
    useEffect(() => {
        // Initialize DataTables
        $('#tableRoomEmty').DataTable();
        $('#tableCustomerDebit').DataTable();
        $('#tableExpireDate').DataTable();
        $('#tableunfinishWork').DataTable();

        // Initialize Chart.js
        const roomStatusCtx = document.getElementById('roomStatusChart').getContext('2d');
        const saleChartCtx = document.getElementById('saleChart').getContext('2d');
        const contractExpireCtx = document.getElementById('contractExpireChart').getContext('2d');

        // Destroy any existing charts to avoid reuse errors
        if (window.roomStatusChartInstance) {
            window.roomStatusChartInstance.destroy();
        }
        if (window.saleChartInstance) {
            window.saleChartInstance.destroy();
        }
        if (window.contractExpireChartInstance) {
            window.contractExpireChartInstance.destroy();
        }

        // Create new room status chart
        window.roomStatusChartInstance = new Chart(roomStatusCtx, {
            type: 'pie',
            data: {
                labels: ['Occupied', 'Vacant', 'Under Maintenance'],
                datasets: [{
                    label: 'Room Status',
                    data: [50, 30, 20],
                    backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
                    borderColor: ['#FF5733', '#33FF57', '#3357FF'],
                    borderWidth: 1
                }]
            }
        });

        // Create new sales chart
        window.saleChartInstance = new Chart(saleChartCtx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Sales (VNĐ)',
                    data: [10000, 20000, 15000, 18000, 22000, 25000],
                    borderColor: '#FF5733',
                    fill: false
                }]
            }
        });

        // Create new contract expiration chart
        window.contractExpireChartInstance = new Chart(contractExpireCtx, {
            type: 'bar',
            data: {
                labels: ['Room A', 'Room B', 'Room C', 'Room D'],
                datasets: [{
                    label: 'Contracts Expiring Soon',
                    data: [5, 2, 4, 3],
                    backgroundColor: '#FF6347',
                    borderColor: '#FF6347',
                    borderWidth: 1
                }]
            }
        });

        // Cleanup function to destroy charts when the component unmounts
        return () => {
            if (window.roomStatusChartInstance) {
                window.roomStatusChartInstance.destroy();
            }
            if (window.saleChartInstance) {
                window.saleChartInstance.destroy();
            }
            if (window.contractExpireChartInstance) {
                window.contractExpireChartInstance.destroy();
            }
        };
    }, []); // Empty dependency array to run once when the component mounts

    return (
        <div>
            {/* Room Status & Sales Charts */}
            <div className="row" style={{ height: 'calc(50vh - 30px)', marginTop: '50px', }}>
                <input type="hidden" id="HasExpire" value="0" />
                <div className="clearfix"></div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Trạng thái phòng</strong></h3>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <form data-parsley-validate className="form-horizontal form-label-left" method="post" id="formRoomStatus">
                                <div id="chartjs-legend" className="noselect"></div>
                                <div className="row">
                                    <canvas
                                        id="roomStatusChart"
                                        style={{ width: "300px", height: "300px", boxSizing: "border-box", display: "block" }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Doanh thu (VNĐ)</strong></h3>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <form data-parsley-validate className="form-horizontal form-label-left" method="post" id="formSale">
                                <canvas id="saleChart"></canvas>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tables for other sections */}
            <div className="row" style={{ height: 'calc(50vh - 30px)' }}>
                <div className="clearfix"></div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Danh sách phòng trống</strong></h3>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <form data-parsley-validate className="form-horizontal form-label-left" method="post" id="formRoomEmty">
                                <table id="tableRoomEmty" className="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Nhà</th>
                                            <th>Phòng</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Danh sách khách nợ tiền phòng</strong></h3>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <form data-parsley-validate className="form-horizontal form-label-left" method="post" id="forCustomerDebit">
                                <table id="tableCustomerDebit" className="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Nhà</th>
                                            <th>Phòng</th>
                                            <th>Khách</th>
                                            <th>Tháng</th>
                                            <th>Số tiền (VNĐ)</th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contract expiration chart */}
            <div className="row" style={{ height: 'calc(50vh - 30px)' }}>
                <div className="clearfix"></div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Khách sắp hết hạn hợp đồng</strong></h3>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <form data-parsley-validate className="form-horizontal form-label-left" method="post" id="formExpireDate">
                                <div className="row">
                                    <canvas id="contractExpireChart"></canvas>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feedback section */}
            <div className="row" style={{ height: 'calc(50vh - 30px)' }}>
                <div className="clearfix"></div>
                <div className="col-md-6 col-sm-12 col-xs-6 col-12">
                    <div className="x_panel">
                        <div className="x_title">
                            <h3 style={{ display: 'inline-block' }}><strong>Góp ý cải thiện phần mềm</strong></h3>
                            <img src="https://sjjs.edu.vn/wp-content/uploads/2021/09/blink-new.gif" width="50px" height="25px" style={{ marginBottom: '5px' }} />
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <a href="https://forms.gle/GNXCAMsV7kWpNHFp9" style={{ color: 'blue' }}>
                                Nếu quý khách hàng có thắc mắc, vấn đề cần chia sẻ.
                                Vui lòng góp ý thông qua link Google Form dưới đây:<br />
                                https://forms.gle/GNXCAMsV7kWpNHFp9
                            </a><br />
                            Chúng tôi rất biết ơn các ý kiến đóng góp của quý khách hàng và sẽ liên tục cải thiện để phần mềm ngày một tốt hơn,
                            đáp ứng được nhu cầu công việc của quý khách hàng.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
