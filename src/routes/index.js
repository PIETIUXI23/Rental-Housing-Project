//Layouts
import { Ad_Layout } from '~/components/Layout';
import { Admin_Layout } from '~/components/Layout';
import Admin from '~/pages/Admin/Home';
import Detail from '~/pages/Advertisement/Detail';
import Home from '~/pages/Advertisement/Home';
import AdHome from '~/pages/Admin/Home';
import Electric from '~/pages/Admin/Electric';
import Water from '~/pages/Admin/Water';
import Debt from '~/pages/Admin/Report/Debt';
import Deposit from '~/pages/Admin/Report/Deposit';
import Expired from '~/pages/Admin/Report/Expired';
import Person from '~/pages/Admin/Report/Person';
import Rent from '~/pages/Admin/Report/Rent';

import Room from '~/pages/Admin/Room';
import Post from '~/pages/Admin/Post';
import Service from '~/pages/Admin/Service';
import EmailHistory from '~/pages/Admin/EmailHistory';
import RegisterSuccesful from '~/pages/Public/RegisterSuccessful';
import RegisterFailure from '~/pages/Public/RegisterFailure';
import NoPermission from '~/pages/Public/NoPermission';
import AddProperties from '~/pages/Admin/AddProperties';
import Properties from '~/pages/Admin/Properties';
import WebAdminHome from '~/pages/WebAdmin/WebAdminHome';
import AdvertisementPage from '~/pages/Admin/AdvertisementPage';
import InputWaterElectric from '~/pages/Admin/InputWaterElectric';

//public la khong can dang nhap
const publicRoutes = [
    { path: '/', component: Home, layout: Ad_Layout },
    { path: '/advertisement/:id', component: Detail, layout: Ad_Layout },
    { path: '/successful', component: RegisterSuccesful },
    { path: '/failure', component: RegisterFailure },
    { path: '/no-permission', component: NoPermission },
];
//private phai dang nhap neu khong no dan sang ben dang nhap
const privateRoutes = [
    { path: '/admin/home', component: AdHome, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/electric', component: Electric, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/water', component: Water, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/report/ReportRoomRent', component: Rent, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/report/ReportCustomerDebt', component: Debt, layout: Admin_Layout, role: 'ROLE_USER' },
    {
        path: '/admin/report/ReportCustomerContractExpired',
        component: Expired,
        layout: Admin_Layout,
        role: 'ROLE_USER',
    },
    { path: '/admin/report/ReportCustomerDeposit', component: Deposit, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/report/ReportRoomPerson', component: Person, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/room', component: Room, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/service', component: Service, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/email', component: EmailHistory, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/house', component: Properties, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/house/add', component: AddProperties, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/house/room', component: Room, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin', component: Admin, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/post', component: AdvertisementPage, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/post/add', component: Post, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/admin/inpWE', component: InputWaterElectric, layout: Admin_Layout, role: 'ROLE_USER' },
    { path: '/webadmin', component: WebAdminHome, layout: Admin_Layout, role: 'ROLE_ADMIN' },
    // { path: '/admin/admin', component: },
];

export { publicRoutes, privateRoutes };
