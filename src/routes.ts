import BasicLayout from '@/layouts/BasicLayout';
import type { IRouterConfig } from 'ice';
import { lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Home,
      },
    ],
  },
];

export default routerConfig;
