export const MENU_ITEMS = [
    {
        id: 'home',
        icon: 'fa-home',
        label: 'Trang chủ',
        path: '/admin/home',
    },
    {
        id: 'room',
        icon: 'fa-bed',
        label: 'Phòng',
        path: '/room',
    },
    {
        id: 'service',
        icon: 'fa-concierge-bell',
        label: 'Dịch vụ',
        path: '/service',
    },
    {
        id: 'electric',
        icon: 'fa-bolt',
        label: 'Chỉ số điện',
        path: '/admin/electric',
    },
    {
        id: 'water',
        icon: 'fa-tint',
        label: 'Chỉ số nước',
        path: '/admin/water',
    },
    {
        id: 'incurred',
        icon: 'fa-plus-circle',
        label: 'Phát sinh',
        path: '/incurred',
    },
    {
        id: 'calculate',
        icon: 'fa-calculator',
        label: 'Tính tiền',
        path: '/calculate',
    },
    {
        id: 'report',
        icon: 'fa-chart-line',
        label: 'Báo cáo',
        hasSubmenu: true, // Cho phép có submenu
        subMenu: [
            {
                id: 'report-room-rent',
                icon: 'fa-file',
                label: 'Danh sách khách đang thuê phòng',
                path: '/admin/report/ReportRoomRent',
            },
            {
                id: 'report-customer-debt',
                icon: 'fa-file',
                label: 'Danh sách khách nợ tiền phòng',
                path: '/admin/report/ReportCustomerDebt',
            },
            {
                id: 'report-customer-contract-expired',
                icon: 'fa-file',
                label: 'Danh sách khách sắp hết hợp đồng',
                path: '/admin/report/ReportCustomerContractExpired',
            },
            {
                id: 'report-customer-deposit',
                icon: 'fa-file',
                label: 'Danh sách khách thuê đặt cọc',
                path: '/admin/report/ReportCustomerDeposit',
            },
            {
                id: 'report-room-person',
                icon: 'fa-file',
                label: 'Danh sách thành viên theo phòng',
                path: '/admin/report/ReportRoomPerson',
            },
        ],
    },
    {
        id: 'post',
        icon: 'fa-rectangle-ad',
        label: 'Đăng bài',
        path: '/post',
    },
    {
        id: 'setting',
        icon: 'fa-cog',
        label: 'Thiết lập',
        path: '/setting',
    },
];
export const FOOTER_ITEMS = [
    {
        id: 'change-password',
        icon: 'fa-key',
        label: 'Thay đổi mật khẩu',
        path: '/Customer/ChangePassword',
    },
    {
        id: 'fullscreen',
        icon: 'fa-arrows-alt',
        label: 'FullScreen',
        path: '/Customer/ChangePassword',
    },
    {
        id: 'lock',
        icon: 'fa-lock',
        label: 'Lock',
        path: '/Customer/ChangePassword',
    },
    {
        id: 'logout',
        icon: 'fa-power-off',
        label: 'Đăng xuất',
        path: '/Customer/ChangePassword',
    },
];

export const ADMIN_MENU = [
    {
        id: 'home',
        icon: 'fa-home',
        label: 'Trang chủ',
        path: '/admin',
    },
    {
        id: 'room',
        icon: 'fa-bed',
        label: 'Phòng',
        path: '/room',
    },
    {
        id: 'service',
        icon: 'fa-concierge-bell',
        label: 'Dịch vụ',
        path: '/service',
    },
    {
        id: 'electric',
        icon: 'fa-bolt',
        label: 'Chỉ số điện',
        path: '/electric',
    },
    {
        id: 'water',
        icon: 'fa-tint',
        label: 'Chỉ số nước',
        path: '/water',
    },
    {
        id: 'incurred',
        icon: 'fa-plus-circle',
        label: 'Phát sinh',
        path: '/incurred',
    },
    {
        id: 'calculate',
        icon: 'fa-calculator',
        label: 'Tính tiền',
        path: '/calculate',
    },
    {
        id: 'post',
        icon: 'fa-rectangle-ad',
        label: 'Đăng bài',
        path: '/post',
    },
    {
        id: 'setting',
        icon: 'fa-cog',
        label: 'Thiết lập',
        path: '/setting',
    },
];
