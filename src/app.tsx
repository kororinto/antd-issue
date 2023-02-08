import setupLocatorUI from '@locator/runtime';
import type { IAppConfig } from 'ice';
import { runApp } from 'ice';
import { Modal } from 'antd';
import './common.scss';

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI();
}

// 使用Modal的函数式组件 在ConfigProvider配置的主题色无法生效
Modal.success({
  title: 'ConfigProvider配置的主题色未生效',
  content: '使用Modal的函数式组件 在ConfigProvider配置的主题色无法生效',
  okText: 'ConfigProvider配置的主题色未生效',
  getContainer: '#theme-container',
});

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    basename: '/',
    fallback: <div />,
  },
};

runApp(appConfig);
