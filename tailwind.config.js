const plugin = require('tailwindcss/plugin');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    boxShadow: {
      'home-notice': '0 10px 10px 0 rgb(97 110 251 / 6%)',
      'home-side-card': '0px 10px 10px 0px rgba(97,110,251,0.06)',
      'recommend-card': '0 10px 10px 0 rgba(54,95,255,0.06)',
    },
    colors: {
      blank: '#FFFFFF',
      blue: {
        1: '#F5F9FF',
        2: '#EBF4FF',
        3: '#D6E7FE',
        4: '#C2DCFF',
        5: '#99C4FE',
        6: '#66A6FE',
        7: '#3389FD',
        8: '#006BFD', // 主题色
        9: '#005DDD', // 主题色 active、hover
        10: '#0052C2',
      },
      primary: '#006BFD', // 主题色/政采蓝08
      text: '#20242C',
      gray: {
        1: '#F7F8FA', // 卡片中模块色
        2: '#F2F4F7', // 背景色
        3: '#ECEEF2', // 表格、输入框默认边框色
        4: '#E3E6EB', // 灰色描边按钮默认边框色
        5: '#D8DCE2', // 边框
        6: '#C2C7D1', // 失效/禁用
        7: '#A7AEBB', // 暗文/提示
        8: '#838B99', // 二级辅助灰文字
        9: '#505663', // 一级辅助灰文字
        10: '#20242C', // 标题，正文文字
      },
      error: '#F53F3F', // 出错
      warning: '#FF7900', // 提醒
      success: '#26BD71', // 成功
      info: '#006BFD', // 提示/进行/链接
      mask: 'rgba(0, 0, 0, 0.7)', // 遮罩
    },
    extend: {
      backgroundImage: {
        home: "url('https://sitecdn.zcycdn.com/f2e-assets/93809b17-c157-401a-98a3-6fe44066801e.png?x-oss-process=image/quality,Q_75/format,jpg')",
        'home-top-card': 'linear-gradient(179deg, #e9f2ff 0%, #fff 13%, #fff 51%, #e8f1fd 100%)',
        notice: "url('https://sitecdn.zcycdn.com/f2e-assets/a2b95073-36c6-4801-b86e-294a0f0feffe.png')",
        'course-home': 'linear-gradient(0deg, rgb(255, 255, 255) 6%, rgba(188, 216, 255, 0.5) 100%)',
        'live-home': 'linear-gradient(0deg, #FFFFFF 6%, rgba(192,201,255,0.5) 100%)',
        'live-mine': 'linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 89%, #EFF5FF 100%);',
        'verify-home': 'linear-gradient(0deg, #fff 6%, rgba(153, 233, 243, 0.3) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.flex-stable': {
          flexShrink: 0,
          flexGrow: 0,
        },
        '.flex-justify-center': {
          justifyContent: 'center',
          display: 'flex',
        },
        '.flex-items-center': {
          alignItems: 'center',
          display: 'flex',
        },
        '.flex-center': {
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
