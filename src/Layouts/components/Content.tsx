import React, { PropsWithChildren, useState } from 'react';
import { Layout, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Landmark, LayoutDashboard, List, Users } from "lucide-react";
import Sidebar from './Sidebar';


const headerItems = [
    { key: 1, label: "Dashbord", path: "/dashbord" },
    { key: 2, label: "List", path: "/list" },
];

const Content = ({ children }: PropsWithChildren) => {

    let labels: any = []
    let paths: any = []
    let selectedIcons: any = [];
    let unselectedIcons: any = [];


    labels = ["Dashbord", "List"]
    paths = ["/dashbord", "/list"]
    selectedIcons = [<LayoutDashboard />, <List />]
    unselectedIcons = [<LayoutDashboard />, <List />]

    type MenuItem = Required<MenuProps>["items"][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
    ): MenuItem {
        return {
            key,
            icon,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = labels.map((label: any, index: any) =>
        getItem(label, (index + 1).toString(), index === 0 ? selectedIcons[index] : unselectedIcons[index])
    );

    const [list, _setList] = useState(items);
    const currentPath = location.pathname;
    const currentIndex = paths.indexOf(currentPath);


    if (paths.includes(currentPath) === true) {
        const newList: any = [...items];
        if (currentIndex != 0) {
            newList[0] = getItem(labels[0], 1, unselectedIcons[0]);
        }
        list[currentIndex] = getItem(labels[currentIndex], currentIndex + 1, selectedIcons[currentIndex]);
        for (let index = 0; index < list.length; index++) {
            if (index !== currentIndex)
                list[index] = getItem(labels[index], index + 1, unselectedIcons[index]);
        }
    }

    return (
        <Layout className='min-h-screen'>
            <Sidebar
                labels={labels.map((label: any) => label)}
                paths={paths}
                selectedIcons={selectedIcons}
                unselectedIcons={unselectedIcons}
                items={items} 
            />
            <Layout>
                <Header items={headerItems}/>
                <Layout className={`py-5 align-top bg-white`}>
                    {children}
                    <Outlet />
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Content;