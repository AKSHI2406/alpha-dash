// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-messages',
      title: 'Messages',
      type: 'item',
      url: '/messages',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'util-customers',
      title: 'Customers',
      type: 'item',
      url: '/customers',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-help',
      title: 'Help & Support',
      type: 'item',
      url: '/help',
      icon: icons.BarcodeOutlined
    }
  ]
};

export default utilities;
