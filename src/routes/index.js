import { HeaderOnly } from '@/layouts';
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

import config from '@/config';

//publicRoutes

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        id: '/',
    },
    {
        path: config.routes.following,
        component: Following,
        id: '/following',
    },
    {
        path: config.routes.profile,
        component: Profile,
        id: '/profile',
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
        id: '/upload',
    },
    {
        path: config.routes.search,
        component: Search,
        layout: undefined,
        id: '/search',
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
