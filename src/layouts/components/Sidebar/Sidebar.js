import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from './../../../config/index';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveIcon, UserGroupIcon } from '@/components/Icons';
import { UserGroupActiveIcon, LiveActiveIcon } from './../../../components/Icons/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
