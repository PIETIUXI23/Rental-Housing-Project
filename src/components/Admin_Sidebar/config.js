export const MENU_ITEMS = [
    {
        id: 'home',
        icon: 'fa-home',
        label: 'Trang chủ',
        path: '/admin'
    },
    {
        id: 'room',
        icon: 'fa-bed',
        label: 'Phòng',
        path: '/room'
    },
    {
        id: 'service',
        icon: 'fa-concierge-bell',
        label: 'Dịch vụ',
        path: '/service'
    },
    {
        id: 'electric',
        icon: 'fa-bolt',
        label: 'Chỉ số điện',
        path: '/electric'
    },
    {
        id: 'water',
        icon: 'fa-tint',
        label: 'Chỉ số nước',
        path: '/water'
    },
    {
        id: 'incurred',
        icon: 'fa-plus-circle',
        label: 'Phát sinh',
        path: '/incurred'
    },
    {
        id: 'calculate',
        icon: 'fa-calculator',
        label: 'Tính tiền',
        path: '/calculate'
    },
    {
        id: 'report',
        icon: 'fa-chart-line',
        label: 'Báo cáo',
        hasSubmenu: true,
        subMenu: [
            {
                id: 'report-a',
                icon: 'fa-file',
                label: 'A',
                path: '/report/a'
            },
            {
                id: 'report-b',
                icon: 'fa-file',
                label: 'B',
                path: '/report/b'
            },
            {
                id: 'report-c',
                icon: 'fa-file',
                label: 'C',
                path: '/report/c'
            },
            {
                id: 'report-d',
                icon: 'fa-file',
                label: 'D',
                path: '/report/d'
            }
        ]
    },
    {
        id: 'staff',
        icon: 'fa-user',
        label: 'Nhân viên',
        path: '/staff'
    },
    {
        id: 'setting',
        icon: 'fa-cog',
        label: 'Thiết lập',
        path: '/setting'
    },
];

export const FOOTER_ITEMS = [
    {
        id: 'change-password',
        icon: 'fa-key',
        label: 'Thay đổi mật khẩu',
        path: '/Customer/ChangePassword'
    },
    {
        id: 'fullscreen',
        icon: 'fa-arrows-alt',
        label: 'FullScreen',
        path: '/Customer/ChangePassword'
    },
    {
        id: 'lock',
        icon: 'fa-lock',
        label: 'Lock',
        path: '/Customer/ChangePassword'
    },
    {
        id: 'logout',
        icon: 'fa-power-off',
        label: 'Đăng xuất',
        path: '/Customer/ChangePassword'
    },
    {
        id: 'support',
        icon: 'fa-question-circle',
        label: 'Hỗ trợ',
        path: '/Customer/Support'
    }
];
