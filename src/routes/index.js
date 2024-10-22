//Layouts
import { HeaderOnly } from '~/components/Layout'
import { Ad_Layout } from '~/components/Layout'
import { Admin_Layout } from '~/components/Layout'
import { Component } from "react"
import Admin from "~/pages/Admin"
import Advertisment from "~/pages/Advertisment"

//public la khong can dang nhap 
const publicRoutes = [
    { path: '/', component: Admin, layout: Admin_Layout },
    { path: '/ad', component: Advertisment, layout: Ad_Layout },
];
//private phai dang nhap neu khong no dan sang ben dang nhap
const privateRoutes = [];

export { publicRoutes, privateRoutes };