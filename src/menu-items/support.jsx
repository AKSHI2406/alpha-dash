// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.ChromeOutlined
    },
    {
      id: 'taxes',
      title: 'Taxes',
      type: 'item',
      url: '/taxes',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]
};

export default support;
