import { HeaderOnly } from '@/components/Layouts';
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

//publicRoutes

const publicRoutes = [
    {
        path: '/',
        component: Home,
        id: '/',
    },
    {
        path: '/following',
        component: Following,
        id: '/following',
    },
    {
        path: '/@:nickname',
        component: Profile,
        id: '/profile',
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
        id: '/upload',
    },
    {
        path: '/search',
        component: Search,
        layout: undefined,
        id: '/search',
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
