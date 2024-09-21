import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Shipments',
      type: 'item',
      url: '/shipments',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Orders',
      type: 'item',
      url: '/orders',
      icon: icons.ProfileOutlined,
      target: true
    }
  ]
};

export default pages;
