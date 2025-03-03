import { Layout, Menu, MenuProps } from "antd";
import { useState, useEffect } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

interface SideBarProps {
  labels: string[];
  paths: string[];
  selectedIcons: React.ReactNode[];
  unselectedIcons: React.ReactNode[];
  items: MenuItem[];
}

const { Sider } = Layout;

const Sidebar = ({
  labels,
  paths,
  selectedIcons,
  unselectedIcons,
  items,
}: SideBarProps) => {
  const [list, setList] = useState(items);
  const currentPath = location.pathname;
  const currentIndex = paths.indexOf(currentPath);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    `${currentIndex + 1}`,
  ]);

  useEffect(() => {
    if (paths.some((path) => currentPath.startsWith(path))) {
      const newList: MenuItem[] = items.map((_item, index) =>
        getItem(
          labels[index],
          index + 1,
          index === currentIndex ? selectedIcons[index] : unselectedIcons[index]
        )
      );
      setList(newList);
      setSelectedKeys([`${currentIndex + 1}`]);
    }
  }, [currentPath, currentIndex, items, labels, selectedIcons, unselectedIcons]);

  const handleMenuClick = (e: any) => {
    // navigate(paths[parseInt(e.key) - 1]);
  };
  
  return (
    <>
      <div
        className={`hidden lg:block bg-[#154c79] w-[100px] lg:w-[250px] 2xl:w-[300px] border-r-[1.5px] border-[#1e81b0]`}
      >
        <Sider trigger={null} collapsible>
          <SidebarContent />
        </Sider>
      </div>

      <style>
        {`
          .ant-menu-inline, .ant-menu-vertical, .ant-menu-root { 
            border: none !important; 
            border-radius: 0 !important; 
          } 
          .ant-menu-item-selected {
            background-color: red !important;
            color: #fff !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  );

  function SidebarContent() {
    return (
      <div className="flex flex-col gap-6 fixed">
        <div className="xl:my-10">
          {/* <img src={logo} alt="Logo" className="w-[150px] h-[100px]" /> */}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={list}
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
          className="w-full mx-2 bg-[#154c79] text-white"
        />
      </div>
    );
  }
};

export default Sidebar;
