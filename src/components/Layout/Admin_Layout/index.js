import React, { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import TopNav from '../../TopNav/TopNav';
import WaitingModal from '../../Modal/WaitingModal';
import NoteModal from '../../Modal/NoteModal';
import CalculatorModal from '../../Modal/CalculatorModal';

// Import các stylesheet
import 'src/Extension/bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '../../../Content/Custom.min.css'; // Custom CSS của dự án

//import 'src/datatables.net-bs/css/dataTables.bootstrap.min.css'; // DataTables Bootstrap CSS
import 'src/Extension/font-awesome/css/font-awesome.min.css'; // Font Awesome
import 'src/Extension/nprogress/nprogress.css'; // NProgress
//import 'src/Extension/iCheck/skins/flat/green.css'; // iCheck CSS
import 'src/Extension/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css'; // ProgressBar
//import 'src/Extension/datatables.net/css/jquery.dataTables.min.css'; // DataTables CSS
//import 'src/Extension/datatables.net-buttons-bs/css/buttons.bootstrap.min.css'; // DataTables Buttons
//import 'src/Extension/datatables.net-select/css/select.dataTables.css'; // DataTables Select
//import 'src/Extension/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css'; // Fixed Header
//import 'src/Extension/datatables.net-responsive-bs/css/responsive.bootstrap.min.css'; // Responsive DataTables
//import 'src/Extension/datatables.net-scroller-bs/css/scroller.bootstrap.min.css'; // Scroller
//import 'src/Extension/chart/style.css'; // Chart Styling
import 'src/Extension/bootstrap-daterangepicker/daterangepicker.css'; // DateRangePicker
import 'src/Extension/toastr-master/toastr.min.css'; // Toastr

const AdminLayout = ({ children }) => {
    // Dùng `useEffect` để tải các thư viện JavaScript cần thiết
    useEffect(() => {
        const loadScripts = () => {
            const scriptUrls = [
                //    'src/Extension/jquery/dist/jquery.min.js',
                //    'src/Extension/bootstrap/dist/js/bootstrap.min.js',
                //    'src/Extension/moment/moment.min.js',
                //    'src/Extension/moment/locale/vi.js',
                //    'src/Extension/jquery-cookie/jquery.cookie.js',
                //   'src/Extension/toastr-master/toastr.min.js',
                //    'src/Extension/jquery-number-master/jquery.number.min.js',
                //    'src/Extension/validator/validator.js',
                //    'src/Scripts/global/globalFunction.js',
                //   'src/Scripts/global/globalParameter.js',
                //   'src/Scripts/global/mainExcute.js',
                //  'src/Scripts/global/layout.js',
                // 'src/Scripts/custom.min.js',
                //    'src/Extension/datatables.net/js/jquery.dataTables.min.js',
                //    'src/Extension/jszip/dist/jszip.min.js',
                //    'src/Extension/pdfmake/build/pdfmake.min.js',
                //    'src/Extension/pdfmake/build/vfs_fonts.js',
                //   'src/Extension/datatables.net-bs/js/dataTables.bootstrap.min.js',
                //    'src/Extension/datatables.net-buttons/js/dataTables.buttons.min.js',
                //    'src/Extension/datatables.net-buttons-bs/js/buttons.bootstrap.min.js',
                //    'src/Extension/datatables.net-buttons/js/buttons.flash.min.js',
                //    'src/Extension/datatables.net-buttons/js/buttons.html5.min.js',
                //    'src/Extension/datatables.net-buttons/js/buttons.print.min.js',
                //    'src/Extension/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js',
                //   'src/Extension/datatables.net-keytable/js/dataTables.keyTable.min.js',
                //    'src/Extension/datatables.net-responsive/js/dataTables.responsive.min.js',
                //    'src/Extension/datatables.net-responsive-bs/js/responsive.bootstrap.js',
                //    'src/Extension/datatables.net-scroller/js/dataTables.scroller.min.js',
                //    'src/Extension/datatables.net-select/js/dataTables.select.js',
                //    'src/Extension/fastclick/lib/fastclick.js',
                //   'src/Extension/nprogress/nprogress.js',
                //    'src/Extension/chart/Chart.min.js',
                //    'src/Extension/chart/Chart.PieceLabel.js',
            ];

            scriptUrls.forEach((url) => {
                const script = document.createElement('script');
                script.src = url;
                script.async = true;
                document.body.appendChild(script);
            });
        };

        loadScripts();
    }, []);

    return (
        <div className="nav-md">
            <div className="container body">
                <div className="main_container">
                    {/* Sidebar */}
                    <div className="col-md-3 left_col">
                        <Sidebar />
                    </div>

                    {/* Top Navigation */}
                    <div className="top_nav">
                        <TopNav />
                    </div>

                    {/* Main Content */}
                    <div className="right_col" role="main" style={{ minHeight: '361px' }}>
                        {children}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <WaitingModal />
            <NoteModal />
            <CalculatorModal />
        </div>
    );
};

export default AdminLayout;
