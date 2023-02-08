import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

const primary = '#006bfd';

const BasicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primary,
          colorInfo: primary,
          colorInfoText: primary,
          colorLink: primary,
          colorPrimaryText: primary,
          colorText: '#20242C',
          colorSuccess: '#26bd71',
          colorWarning: '#ff7900',
          colorError: '#f53f3f',
        },
      }}
    >
      <div id="theme-container" className="w-full h-[100vh] flex flex-col">{children}</div>
    </ConfigProvider>
  );
};

export default BasicLayout;
