import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/img';
import { Wrapper as PopperWrapper, Menu } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';

const cx = classNames.bind(styles);

const MenuItem = [
    {
        icon: <img src={images.language} alt="LG" />,
        title: 'English',
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
    const [searchResults, setSearchResults] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Có lỗi xảy ra với API" />
                </div>
                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-account-title')}>Tài khoản </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
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
                    <Menu items={MenuItem}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('icon-login')} icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
