/* eslint-disable no-param-reassign */
import { useState } from 'react';
import Profile from './profile';
import MenuItem from './menuItem';
import Footer from './footer';

const Menus = [
  {
    title: 'Overview',
    path: '/member',
    icon: 'overview',
    active: true,
  },
  {
    title: 'Transactions',
    path: '/member/transactions',
    icon: 'transaction',
    active: false,
  },
  {
    title: 'Messages',
    path: '/member',
    icon: 'message',
    active: false,
  },
  {
    title: 'Card',
    path: '/#',
    icon: 'card',
    active: false,
  },
  {
    title: 'Reward',
    path: '/#',
    icon: 'reward',
    active: false,
  },
  {
    title: 'Settings',
    path: '/member/edit-profile',
    icon: 'setting',
    active: false,
  },
  {
    title: 'Log Out',
    path: '/sign-in',
    icon: 'logout',
    active: false,
  },
];

export default function SideBar() {
  const [menus, setMenus] = useState([...Menus]);

  const handleActive = (value: string) => {
    const tempMenu = [...menus];

    tempMenu.forEach((menu) => {
      if (menu.title === value) {
        menu.active = true;
      } else {
        menu.active = false;
      }
    });
    setMenus(tempMenu);
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {menus.map((menu) => (
            <MenuItem
              title={menu.title}
              path={menu.path}
              icon={menu.icon}
              active={menu.active}
              key={menu.icon}
              handleActive={handleActive}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
}
