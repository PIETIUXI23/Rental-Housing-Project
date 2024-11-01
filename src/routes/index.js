//Layouts
import { Ad_Layout } from '~/components/Layout'
import { Admin_Layout } from '~/components/Layout'
import Admin from "~/pages/Admin"
import Advertisment from "~/pages/Advertisment"

//public la khong can dang nhap 
const publicRoutes = [
    { path: '/admin', component: Admin, layout: Admin_Layout },
    { path: '/', component: Advertisment, layout: Ad_Layout },
];
//private phai dang nhap neu khong no dan sang ben dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };