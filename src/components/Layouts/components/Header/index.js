import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/img';
import { Wrapper as PopperWrapper, Menu } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import avatar from '@/assets/img/images.jpg';
import { UploadIcon, MessageIcon } from '@/components/Icons';
import Search from '../Search';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

const MenuItem = [
    {
        icon: <img src={images.language} alt="LG" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ],
        },
    },
    {
        icon: <img src={images.faqs} alt="LFAQ" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img src={images.keyboard} alt="BS" />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // user login
    const currentUser = true;

    // handle logic
    function handleMenuChange(menuItem) {
        console.log(menuItem);
    }

    // when user login
    const userMenu = [
        {
            icon: <img src={images.user} alt="LFAQ" />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <img src={images.coins} alt="LFAQ" />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <img src={images.settings} alt="LFAQ" />,
            title: 'Settings',
            to: '/setting',
        },
        ...MenuItem,
        {
            icon: <img src={images.logout} alt="LFAQ" />,
            title: 'Log out',
            to: '/logout',
            separate: 'HT',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Có lỗi xảy ra với API" />
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('btn-currentUser')}>
                                    <UploadIcon className="Upload" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('btn-currentUser', 'btn-currentUser-2')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('btn-currentUser')}>
                                    <img className={cx('img-btn-user')} src={images.maill} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="/upload">
                                Upload
                            </Button>
                            <Button
                                primary
                                onClick={() => {
                                    console.log('test');
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MenuItem} onChange={handleMenuChange}>
                        {currentUser ? (
                            // <Image className={cx('user-avatar')}></Image>
                            <Image
                                src="https://lh5.googleusercontent.com/QolZv_6CsQodma6fxqR98DM5Udtj7uY3cx23LcY2LxJYnrbVYNVVO6HDimuWrE2mxN4AaHya7YGLpB_Q9u7S=w1920-h928-rw"
                                alt="Nguyễn Trường Sơn"
                                className={cx('user-avatar')}
                                fallback="https://gcdnb.pbrd.co/images/r39nV6NMtqjW.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('icon-login')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
