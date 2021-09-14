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

export default function SideBar({ activeMenu }: { activeMenu: string }) {
  const [menus] = useState([...Menus]);
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
              active={menu.title === activeMenu}
              key={menu.icon}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
}
