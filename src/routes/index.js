import { HeaderOnly } from '@/components/Layouts';
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

import routesConfig from '@/config/routes';

//publicRoutes

const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
        id: '/',
    },
    {
        path: routesConfig.following,
        component: Following,
        id: '/following',
    },
    {
        path: routesConfig.profile,
        component: Profile,
        id: '/profile',
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
        id: '/upload',
    },
    {
        path: routesConfig.search,
        component: Search,
        layout: undefined,
        id: '/search',
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
