//Layouts
import { Ad_Layout } from '~/components/Layout';
import { Admin_Layout } from '~/components/Layout';
import Admin from '~/pages/Admin';
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

import House from '~/pages/Admin/Properties';
import Post from '~/pages/Admin/Post';
import Service from '~/pages/Admin/Service';
import EmailHistory from '~/pages/Admin/EmailHistory';

import AddHouse from '~/pages/Admin/AddProperties';
import Room from '~/pages/Admin/Room';

//public la khong can dang nhap
const publicRoutes = [
    { path: '/admin', component: Admin, layout: Admin_Layout },
    { path: '/', component: Home, layout: Ad_Layout },
    { path: '/advertisement/:id', component: Detail, layout: Ad_Layout },
    { path: '/admin/home', component: AdHome, layout: Admin_Layout },
    { path: '/admin/electric', component: Electric, layout: Admin_Layout },
    { path: '/admin/water', component: Water, layout: Admin_Layout },
    { path: '/admin/report/ReportRoomRent', component: Rent, layout: Admin_Layout },
    { path: '/admin/report/ReportCustomerDebt', component: Debt, layout: Admin_Layout },
    { path: '/admin/report/ReportCustomerContractExpired', component: Expired, layout: Admin_Layout },
    { path: '/admin/report/ReportCustomerDeposit', component: Deposit, layout: Admin_Layout },
    { path: '/admin/report/ReportRoomPerson', component: Person, layout: Admin_Layout },
    { path: '/admin/house', component: House, layout: Admin_Layout },
    { path: '/admin/post', component: Post, layout: Admin_Layout },
    { path: '/admin/service', component: Service, layout: Admin_Layout },
    { path: '/admin/email', component: EmailHistory, layout: Admin_Layout },
    { path: '/admin/house/add', component: AddHouse, layout: Admin_Layout },
    { path: '/admin/house/room', component: Room, layout: Admin_Layout },
];
//private phai dang nhap neu khong no dan sang ben dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };
