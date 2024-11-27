//Layouts
import { Ad_Layout } from '~/components/Layout';
import { Admin_Layout } from '~/components/Layout';
import Admin from '~/pages/Admin';
import Detail from '~/pages/Advertisement/Detail';
import Home from '~/pages/Advertisement/Home';
import Room from '~/pages/Admin/Room';
import Post from '~/pages/Admin/Post';

//public la khong can dang nhap
const publicRoutes = [
    { path: '/admin', component: Admin, layout: Admin_Layout },
    { path: '/', component: Home, layout: Ad_Layout },
    { path: '/advertisement/:id', component: Detail, layout: Ad_Layout },
    { path: '/admin/room', component: Room, layout: Admin_Layout },
    { path: '/admin/post', component: Post, layout: Admin_Layout },
];
//private phai dang nhap neu khong no dan sang ben dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };
